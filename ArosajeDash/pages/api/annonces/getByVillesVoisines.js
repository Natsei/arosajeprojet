import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import Map from '../../../utils/map'

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

    const { rayon } = req.query;
    const id = decoded.userId;
    const utilisateur = await prisma.utilisateur.findUnique({
        where: {
          id,
        },
        select: {
          ville: true,
          cp: true,
          rue: true,
        },
    });

    // Récupérer la liste des villes dans le rayon donné pour l'utilisateur connecté depuis une autre API
    const villesProches = await Map.getVillesVoisines(utilisateur.cp,rayon); 
    
    if (!villesProches) {
      return res.status(500).json({ error: 'Erreur lors de la récupération de la liste des villes proches' });
    }

    try {
      // Récupérer toutes les annonces dont la ville de l'auteur est dans la liste autorisée
      const annonces = await prisma.annonce.findMany({
        where: {
          auteur: {
            cp: {
              in: villesProches,
            },
          },
        },
        include: {
          auteur: true,
          plante: true,
          lesPhotos: true,
          lesVisites: true,
        },
      });
      
      res.status(200).json(annonces);
    } catch (error) {
      console.error('Erreur lors de la récupération des annonces par villes :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}
