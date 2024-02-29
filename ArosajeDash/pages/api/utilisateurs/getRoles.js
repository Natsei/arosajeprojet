import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    // Répondre favorablement aux requêtes OPTIONS pré-vol
    return res.status(200).end();
  }
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
    const { id } = req.query;
   

    try {
      // Vérifier si l'utilisateur existe
      const utilisateur = await prisma.utilisateur.findUnique({
        where: {
          id: id,
        },
      });

      if (!utilisateur) {
        return res.status(404).json({ error: 'Utilisateur non trouvé' });
      }

      // Récupérer tous les rôles de l'utilisateur
      const rolesUtilisateur = await prisma.roleUtilisateur.findMany({
        where: {
          utilisateurId: id,
        },
        include: {
          role: true,
        },
      });

      // Extraire les noms de rôles
      const roles = rolesUtilisateur.map((roleUtilisateur) => roleUtilisateur.role?.nom);

      res.status(200).json({ roles });
    } catch (error) {
      console.error('Erreur lors de la récupération des rôles de l\'utilisateur :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}