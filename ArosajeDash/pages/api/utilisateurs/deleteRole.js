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

    const tokenUserId = decoded.userId;
    // Vérifier si le token appartient à un administrateur
    if (!Security.isAdmin(tokenUserId)) {
      return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à supprimer un rôle' });
    }

    const { userId, roleId } = req.query;

    if (!userId || !roleId) {
      return res.status(400).json({ error: 'Les paramètres "userId" et "roleId" sont requis' });
    }

    try {
      // Vérifier si l'utilisateur existe
      const utilisateur = await prisma.utilisateur.findUnique({
        where: {
          id: userId,
        },
      });

      if (!utilisateur) {
        return res.status(404).json({ error: 'Utilisateur non trouvé' });
      }

      // Vérifier si le rôle existe
      const role = await prisma.role.findUnique({
        where: {
          id: roleId,
        },
      });

      if (!role) {
        return res.status(404).json({ error: 'Rôle non trouvé' });
      }

      // Retirer le rôle à l'utilisateur
      await prisma.roleUtilisateur.delete({
        where: {
          utilisateurId_roleId: {
            utilisateurId: userId,
            roleId,
          },
        },
      });

      res.status(200).json({ message: 'Rôle retiré avec succès' });
    } catch (error) {
      console.error('Erreur lors du retrait du rôle de l\'utilisateur :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}