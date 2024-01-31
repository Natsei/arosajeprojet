import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end(); // Méthode non autorisée
  }

  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(400).json({ error: 'Le token est requis dans les paramètres de la requête.' });
  }

  try {
    jwt.verify(token, 'secret_key', async (err, decoded) => {
        if (err) {
          return res.status(401).json({ error: 'Token non valide' });
        }
        const annonces = await prisma.annonce.findMany({
        include: {
            auteur: true,
            plante: true,
            lesPhotos: true,
            lesVisites: true,
        },
        });

        res.status(200).json(annonces);
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des annonces :', error);
    res.status(500).json({ error: 'Erreur serveur' });
  } finally {
    await prisma.$disconnect();
  }
}