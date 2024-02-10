import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import Security from '../../../utils/security';

const prisma = new PrismaClient();

export default async function getLesDiscussions(req, res) {
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

    const userId = decoded.userId;

    try {
      // Récupérer la liste des discussions de l'utilisateur avec le dernier message
      const discussions = await prisma.message.findMany({
        where: {
          OR: [
            { auteurId: userId },
            { destinataireId: userId },
          ],
        },
        distinct: ['auteurId', 'destinataireId'],
        orderBy: {
          datePublication: 'desc',
        },
        select: {
          auteurId: true,
          destinataireId: true,
          contenu: true,
          datePublication: true,
        },
      });
      
      // Récupérer les informations de chaque utilisateur dans la discussion
      const discussionsList = await Promise.all(discussions.map(async message => {
        const otherUserId = message.auteurId === userId ? message.destinataireId : message.auteurId;
      
        // Récupérer les détails de l'autre utilisateur
        const otherUserDetails = await prisma.utilisateur.findUnique({
          where: {
            id: otherUserId,
          },
          select: {
            id: true,
            prenom: true,
            nom: true,
            cheminPhoto: true,
          },
        });
      
        const lastMessage = {
          content: message.contenu,
          datePublication: message.datePublication,
        };
      
        return {
          userId: otherUserId,
          userDetails: otherUserDetails,
          lastMessage,
        };
      }));
      
      // Retourner la liste des discussions
      res.status(200).json(discussionsList);
    } catch (error) {
      console.error('Erreur lors de la récupération des discussions :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}