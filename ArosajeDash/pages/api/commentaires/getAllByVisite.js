import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import Security from '../../../utils/security';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // Vérifier la méthode HTTP
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
    const { visiteId } = req.query;

    try {
      // Récupérer la visite associée au commentaire
      const visite = await prisma.visite.findUnique({
        where: {
          id: parseInt(visiteId),
        },
        include: {
          visiteAcceptee: true,
          visiteur: true,
          annonce: true
        },
      });

      if (!visite) {
        return res.status(404).json({ error: 'Visite non trouvée' });
      }

      // Vérifier si l'utilisateur a le droit de voir les commentaires de cette visite
      if (!(await Security.isBotaniste(userId)) && !(await Security.isAdmin(userId) && userId !== visite.annonce.auteurId && userId !== visite.visiteurId)) {
        return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à accéder à ces commentaires' });
      }

      // Récupérer tous les commentaires de la visite
      const commentaires = await prisma.commentaire.findMany({
        where: {
          visiteId: visite.id,
        },
        include: {
          auteur: true,
        },
      });

      res.status(200).json(commentaires);
    } catch (error) {
      console.error('Erreur lors de la récupération des commentaires :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}