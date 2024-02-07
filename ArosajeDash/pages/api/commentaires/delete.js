import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import Security from '../../../utils/security';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // Vérifier la méthode HTTP
  if (req.method !== 'DELETE') {
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
    const { commentaireId } = req.query;

     // Vérifier si l'utilisateur est l'auteur du commentaire
     const commentaire = await prisma.commentaire.findUnique({
        where: {
          id: parseInt(commentaireId, 10),
        },
        select: {
          auteurId: true,
        },
      });

      if (!commentaire) {
        return res.status(404).json({ error: 'Commentaire non trouvé' });
      }

      if (commentaire.auteurId !== userId && !(await Security.isAdmin(userId))) {
        return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à supprimer ce commentaire' });
      }


    try {

      // Supprimer le commentaire
      await prisma.commentaire.delete({
        where: {
          id: parseInt(commentaireId),
        },
      });

      res.status(200).json({ message: 'Commentaire supprimé avec succès' });
    } catch (error) {
      console.error('Erreur lors de la suppression du commentaire :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}