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

    const { categorieId } = req.query;

    if (!categorieId) {
      return res.status(400).json({ error: 'Le paramètre categorieId est requis' });
    }

    try {
      // Vérifier si la catégorie à supprimer existe
      const categorieToDelete = await prisma.categorie.findUnique({
        where: {
          id: parseInt(categorieId),
        },
      });

      if (!categorieToDelete) {
        return res.status(404).json({ error: 'Catégorie non trouvée' });
      }

      // Vérifier si l'utilisateur a le droit de supprimer la catégorie
      if (!Security.isAdmin(decoded.userId)) {
        return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à supprimer une catégorie' });
      }

      // Supprimer la catégorie
      await prisma.categorie.delete({
        where: {
          id: parseInt(categorieId),
        },
      });

      res.status(200).json({ message: 'Categorie supprimée avec succès' });
    } catch (error) {
      console.error('Erreur lors de la suppression de la catégorie :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}