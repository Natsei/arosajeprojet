import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';


const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    // Répondre favorablement aux requêtes OPTIONS pré-vol
    return res.status(200).end();
  }
  if (req.method !== 'GET') {
    return res.status(405).end(); // Méthode non autorisée
  }

  const { id } = req.query;
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(400).json({ error: 'Le token est requis dans les paramètres de la requête.' });
  }


  if (!id) {
    return res.status(400).json({ error: 'L\'identifiant est requis dans les paramètres de la requête.' });
  }

  try {
    jwt.verify(token, 'secret_key', async (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Token non valide' });
      }
      const utilisateur = await prisma.utilisateur.findUnique({
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
        },
      });

      if (!utilisateur) {
        return res.status(404).json({ error: 'Utilisateur non trouvé.' });
      }

      //Déchiffrement des données
      utilisateur.rue = Security.decryptData(utilisateur.rue)

      res.status(200).json(utilisateur);
    });
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'utilisateur :', error);
    res.status(500).json({ error: 'Erreur serveur' });
  } finally {
    await prisma.$disconnect();
  }
}