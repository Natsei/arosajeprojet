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

    const planteId = parseInt(req.query.id, 10);

    if (isNaN(planteId)) {
      return res.status(400).json({ error: 'L\'ID de la plante doit être un nombre entier' });
    }

    try {
      // Récupérer la plante par son ID
      const plante = await prisma.plante.findUnique({
        where: {
          id: planteId,
        },
        select: {
          id: true,
          libelle: true,
          description: true,
          categorieId: true,
        },
      });

      if (!plante) {
        return res.status(404).json({ error: 'Plante non trouvée' });
      }

      res.status(200).json(plante);
    } catch (error) {
      console.error('Erreur lors de la récupération de la plante :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}