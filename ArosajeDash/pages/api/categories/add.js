import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import Security from '../../../utils/security';

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
        if (!Security.isAdmin(userId)) {
            return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à ajouter une catégorie' });
        }

        // Vérifie que la catégorie n'existe pas déjà
        //Test si la catégorie existe déjà
        const categorieExistante = await prisma.categorie.findUnique({
          where: {
            libelle,
          },
          select: {
            id: true,
          },
        });

        if(categorieExistante){
          return res.status(400).json({ error: 'La catégorie existe déjà avec l\'id : ' + categorieExistante.id});
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