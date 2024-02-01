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

    const { planteId } = req.query;

    if (!planteId) {
      return res.status(400).json({ error: 'Le paramètre planteId est requis' });
    }

    try {
      // Vérifier si la plante à supprimer existe
      const planteToDelete = await prisma.plante.findUnique({
        where: {
          id: parseInt(planteId),
        },
      });

      if (!planteToDelete) {
        return res.status(404).json({ error: 'Plante non trouvée' });
      }

      // Vérifier si l'utilisateur a le droit de supprimer la plante
      if (!Security.isAdmin(decoded.userId)) {
        return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à supprimer une plante' });
      }

      // Supprimer la plante
      await prisma.plante.delete({
        where: {
          id: parseInt(planteId),
        },
      });

      res.status(200).json({ message: 'Plante supprimée avec succès' });
    } catch (error) {
      console.error('Erreur lors de la suppression de la plante :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}