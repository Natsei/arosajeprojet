import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import Security from '../../../utils/security';

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
  
      const userId = decoded.userId;
      const { utilisateurId } = req.query;
  
      try {
        // Vérifier si l'utilisateur spécifié existe
        const utilisateurExists = await prisma.utilisateur.findUnique({
          where: {
            id: utilisateurId,
          },
        });
  
        if (!utilisateurExists) {
          return res.status(404).json({ error: 'Utilisateur non trouvé' });
        }
  
        // Récupérer tous les messages de la discussion entre les deux utilisateurs
        const messages = await prisma.message.findMany({
          where: {
            OR: [
              {
                auteurId: userId,
                destinataireId: utilisateurId,
              },
              {
                auteurId: utilisateurId,
                destinataireId: userId,
              },
            ],
          },
          orderBy: {
            datePublication: 'asc',
          },
        });
  
        // Retourner l'ensemble des messages de la discussion
        return res.status(200).json(messages);
  
      } catch (error) {
        console.error('Erreur lors de la récupération de la discussion :', error);
        return res.status(500).json({ error: 'Erreur serveur' });
      } finally {
        await prisma.$disconnect();
      }
    });
  }