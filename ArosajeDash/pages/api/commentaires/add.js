import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import Security from '../../../utils/security';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    // Répondre favorablement aux requêtes OPTIONS pré-vol
    return res.status(200).end();
  }
  // Vérifier la méthode HTTP
  if (req.method !== 'POST') {
    return res.status(405).end(); // Méthode non autorisée
  }

  // Récupérer le token d'authentification depuis l'en-tête
  const token = req.headers.authorization?.split(' ')[1];
  console.log("test");
  // Vérifier la validité du token
  jwt.verify(token, 'secret_key', async (err, decoded) => {
    if (err) {
      console.error('Erreur lors de la vérification du token :', err);
      return res.status(401).json({ error: 'Token non valide' });
    }

    const userId = decoded.userId;

    // Vérifier si l'utilisateur est un botaniste
    const isBotaniste = await Security.isBotaniste(userId);
    if (!isBotaniste) {
      return res.status(403).json({ error: 'Vous devez être un botaniste pour ajouter un commentaire' });
    }

    const { visiteId, contenu } = req.body;

    try {
      // Vérifier si la visite existe et a été acceptée
      const visite = await prisma.visite.findUnique({
        where: {
          id: visiteId,
        },
        include: {
          visiteAcceptee: true,
        },
      });

      if (!visite || !visite.visiteAcceptee) {
        return res.status(404).json({ error: 'Visite non trouvée ou non acceptée' });
      }

      // Ajouter le commentaire à la visite
      const commentaire = await prisma.commentaire.create({
        data: {
          contenu,
          datePublication: new Date(),
          auteurId: userId,
          visiteId,
        },
      });

      res.status(200).json(commentaire);
    } catch (error) {
      console.error('Erreur lors de l\'ajout du commentaire :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}