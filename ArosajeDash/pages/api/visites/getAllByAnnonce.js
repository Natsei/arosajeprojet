import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import Security from '../../../utils/security';

const prisma = new PrismaClient();



/**
 * Retourne toutes les visites pour une annonce
 * Accepte un paramètre statut : Si egal à "acceptees" retourne toutes les visites acceptées, si egal à "refusées", retourne toutes les visites refusees
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
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

    const userId = decoded.userId;
    const { annonceId, statut } = req.query;

    if (!annonceId) {
      return res.status(400).json({ error: 'Le paramètre annonceId est requis' });
    }

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
      return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à consulter les visites de cette annonce' });
    }

    try {
     
      // Récupérer toutes les visites pour l'annonce
      const visites = await prisma.visite.findMany({
        where: {
          annonceId: parseInt(annonceId, 10),
          // Ajouter la condition pour le statut si présent
          ...(statut && statut === 'acceptees' ? { visiteAcceptee: { is: { not: null } } } : {}),
          ...(statut && statut === 'refusees' ? { visiteRefusee: { is: { not: null } } } : {}),
        },
        include: {
          visiteAcceptee: true,
          visiteRefusee: true,
        },
      });

      res.status(200).json(visites);
    } catch (error) {
      console.error('Erreur lors de la récupération des visites :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}