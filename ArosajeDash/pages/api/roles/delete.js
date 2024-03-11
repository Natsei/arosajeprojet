import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import Security from '../../../utils/security';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    // Répondre favorablement aux requêtes OPTIONS pré-vol
    return res.status(200).end();
  }
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

    const { roleId } = req.query;

    if (!roleId) {
      return res.status(400).json({ error: 'Le paramètre roleId est requis' });
    }

    try {
      // Vérifier si le rôle à supprimer existe
      const roleToDelete = await prisma.role.findUnique({
        where: {
          id: parseInt(roleId),
        },
      });

      if (!roleToDelete) {
        return res.status(404).json({ error: 'Rôle non trouvé' });
      }

      // Vérifier si l'utilisateur a le droit de supprimer le rôle
      if (!Security.isAdmin(decoded.userId)) {
        return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à supprimer un rôle' });
      }

      // Supprimer le rôle
      await prisma.role.delete({
        where: {
          id: parseInt(roleId),
        },
      });

      res.status(200).json({ message: 'Role supprimé avec succès' });
    } catch (error) {
      console.error('Erreur lors de la suppression du rôle :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}