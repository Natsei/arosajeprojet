import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import Security from '../../../utils/security';


const prisma = new PrismaClient();

export default async function handler(req, res) {
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
    const { annonceId } = req.query;

    if (!annonceId) {
      return res.status(400).json({ error: 'Le paramètre annonceId est requis' });
    }

    try {
      // Vérifier si l'utilisateur est l'auteur de l'annonce
      const annonce = await prisma.annonce.findUnique({
        where: {
          id: parseInt(annonceId, 10),
        },
        select: {
          auteurId: true,
        },
      });

      if (!annonce) {
        return res.status(404).json({ error: 'Annonce non trouvée' });
      }

      if (annonce.auteurId !== userId && !(await Security.isAdmin(userId))) {
        return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à supprimer cette annonce' });
      }

      // Supprimer l'annonce de la base de données
      await prisma.annonce.delete({
        where: {
          id: parseInt(annonceId, 10),
        },
      });

      res.status(200).json({ message: 'Annonce supprimée avec succès' });
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'annonce :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}