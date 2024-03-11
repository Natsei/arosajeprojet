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

  // Récupérer le token d'authentification depuis l'en-tête
  const token = req.headers.authorization?.split(' ')[1];

  // Vérifier la validité du token
  jwt.verify(token, 'secret_key', async (err, decoded) => {
    if (err) {
      console.error('Erreur lors de la vérification du token :', err);
      return res.status(401).json({ error: 'Token non valide' });
    }

    const annonceId = parseInt(req.query.id, 10);

    if (isNaN(annonceId)) {
      return res.status(400).json({ error: 'L\'ID de l\'annonce doit être un nombre entier' });
    }

    try {
      // Récupérer l'annonce par son ID
      const annonce = await prisma.annonce.findUnique({
        where: {
          id: annonceId,
        },
        include: {
          auteur: {
            select: {
              id: true,
              email: true,
              prenom: true,
              nom: true,
              description: true,
              cheminPhoto: true,
              ville: true,
            },
          },
          plante: {
            select: {
              id: true,
              libelle: true,
              description: true,
              categorie: {
                select: {
                  id: true,
                  libelle: true,
                },
              },
            },
          },
          lesPhotos: {
            select: {
              id: true,
              cheminPhoto: true,
            },
          },
        },
      });

      if (!annonce) {
        return res.status(404).json({ error: 'Annonce non trouvée' });
      }

      res.status(200).json(annonce);
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'annonce :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}