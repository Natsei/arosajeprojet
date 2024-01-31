import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import isAdmin from '../../../utils/isAdmin'

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
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
    const { libelle } = req.body;

    try {
        // Vérifier si le token appartient à un administrateur
        if (!isAdmin(userId)) {
            return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à ajouter une catégorie' });
        }

        // Créer une nouvelle catégorie
        const categorie = await prisma.categorie.create({
            data: {
            libelle,
            },
            select: {
            id: true,
            libelle: true,
            },
        });

        res.status(200).json(categorie);
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la catégorie :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}