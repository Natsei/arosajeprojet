const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const http = require('http');
const { Server } = require('socket.io');
const express = require('express');
const cors = require('cors');
const prisma = new PrismaClient();

const expressApp = express();

// Configuration CORS
expressApp.use(cors({
  origin: 'http://localhost:8081', // Remplacez par l'origine de votre application front-end
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

const server = http.createServer(expressApp);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:8081', // Remplacez par l'origine de votre application front-end
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Ajoutez cette ligne pour autoriser les cookies de session
  }
});

io.use(async (socket, next) => {
  try {
    const token = socket.handshake.auth.token;
    if (!token) {
      return next(new Error("Pas de token fourni"));
    }

    // Vérifie l'authentification
    const decoded = jwt.verify(token, 'secret_key');
    if (!decoded) {
      return next(new Error("Authentification échouée"));
    }

    const utilisateur = await prisma.utilisateur.findUnique({
      where: { id: decoded.id },
    });

    if (!utilisateur) {
      return next(new Error("Utilisateur non trouvé"));
    }

    socket.utilisateur = utilisateur;
    next();
  } catch (erreur) {
    console.error('Erreur d\'authentification:', erreur);
    return next(new Error("Erreur d'authentification"));
  }
});

io.on('connection', (socket) => {
  console.log('Un utilisateur s\'est connecté : ' + socket.utilisateur.id);

  socket.on('sendMessage', async ({ destinataireId, contenu }) => {
    try {
      const nouveauMessage = await prisma.message.create({
        data: {
          auteurId: socket.utilisateur.id,
          destinataireId,
          contenu,
          datePublication: new Date(),
        },
      });

      io.to(destinataireId).emit('newMessage', nouveauMessage);
    } catch (erreur) {
      console.error('Erreur lors de la sauvegarde du message en base de données :', erreur);
    }
  });

  socket.on('disconnect', () => {
    console.log('Un utilisateur s\'est déconnecté');
  });
});

server.listen(3001, () => {
  console.log('Serveur Socket.io en écoute sur le port 3001');
});
