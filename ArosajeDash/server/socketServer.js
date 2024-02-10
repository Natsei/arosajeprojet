import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import Security from '../../../utils/security';

const http = require('http');
const { Server } = require('socket.io');
const express = require('express');

const expressApp = express();
const server = http.createServer(expressApp);

const io = new Server(server);


io.use(async (socket, next) => {
  try {
    const token = socket.handshake.auth.token;
    // Vérifie l'authentification  
    const decoded = await new Promise((resolve, reject) => {
      jwt.verify(token, 'secret_key', (err, decoded) => {
        if (err) reject(err);
        else resolve(decoded);
      });
    });

    if (!decoded) {
      socket.emit('authenticationError', { message: "Authentification échouée" });
      return next(new Error("Authentification échouée"));
    }
    
    const getUser = async ( id ) => {
      return await prisma.utilisateur.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          email: true,
          prenom: true,
          nom: true,
          ville: true,
          cp: true,
          rue: true,
          description: true,
          cheminPhoto: true,
          dateInscription: true,
          lesMessagesEnvoyes: true,
          lesMessagesRecus: true,
        },
      });
    }
    const utilisateur = await getUser(userId);

    if (utilisateur) {
      // Ajoute l'utilisateur authentifié à l'objet du socket
      socket.utilisateur = utilisateur;
      return next();
    } else {
      next(new Error("Authentification échouée"));
      return next(new Error("Authentification échouée"));
    }
    
  } catch (erreur) {
    console.error('Erreur d\'authentification:', erreur);
    socket.emit('authenticationError', { message: "Erreur d'authentification" });
    return next(new Error("Erreur d'authentification"));
  }
});



io.on('connection', (socket) => {
  console.log('Un utilisateur s\'est connecté : '+ socket.utilisateur.id);

  // Gère les événements Socket.io ici
  socket.on('sendMessage', async ({ destinataireId, contenu }) => {
    try {
      // Sauvegarder le message en base de données
      const nouveauMessage = await prisma.message.create({
        data: {
          auteurId: socket.utilisateur.id,
          destinataireId,
          contenu,
          datePublication: new Date(),
        },
      });

      // Émettre le message à l'utilisateur destinataire
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
