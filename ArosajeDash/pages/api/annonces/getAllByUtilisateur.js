import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end(); // Méthode non autorisée
  }

  // Récupérer le token d'authentification depuis l'en-tête
  const token = req.headers.authorization?.split(' ')[1];

  // Vérifier la validité du token
  jwt.verify(token, 'secret_key', async (err, decoded) => {
    if (err) {
      console.error('Erreur lors de la vérification du token :', err);
      return res.status(401).json({ error: 'Token non valide' });
    }

    const userId = decoded.id;

    try {
      // Récupérer toutes les annonces liées à l'utilisateur spécifié
      const annonces = await prisma.annonce.findMany({
        where: {
          auteurId: userId,
        },
        include: {
          auteur: {
            select: {
              id: true,
              email: true,
              prenom: true,
              nom: true,
              // Ajoute d'autres champs que tu souhaites inclure
            },
          },
          plante: true,
          lesPhotos: true,
          lesVisites: true,
          // Ajoute d'autres relations que tu souhaites inclure
        },
      });

      res.status(200).json(annonces);
    } catch (error) {
      console.error('Erreur lors de la récupération des annonces par utilisateur :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}