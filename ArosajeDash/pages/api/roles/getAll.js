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

    try {
      // Vérifier si l'utilisateur a le droit de récupérer tous les rôles
      if (!Security.isAdmin(decoded.userId)) {
        return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à récupérer tous les rôles' });
      }

      // Récupérer tous les rôles
      const roles = await prisma.role.findMany();

      res.status(200).json(roles);
    } catch (error) {
      console.error('Erreur lors de la récupération des rôles :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}