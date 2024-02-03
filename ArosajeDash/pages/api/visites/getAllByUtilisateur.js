import { PrismaClient, Prisma } from '@prisma/client';
import jwt from 'jsonwebtoken';
import Security from '../../../utils/security';

const prisma = new PrismaClient();


/**
 * Retourne toutes les visites de l'utilisateur connecté sauf si un autre utilisateur est fournit
 * Accepte un paramètre utilisateurId : Retourne toutes les visites de cet utilisateur
 * Accepte un paramètre date : Si egal à "futures" retourne toutes les visites du jour et futures, si egal à "passees", reoturne toutes les visites passées
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
    const utilisateurId = req.query.utilisateurId || userId; // Utiliser l'utilisateur connecté si aucun utilisateur n'est fourni
    const dateFilter = req.query.date; // Récupérer le paramètre de filtrage par date

    try {
      if (utilisateurId !== userId && !Security.isAdmin(userId)) {
        return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à consulter les visites de cet utilisateur' });
      }

      // Construire le filtre de date en fonction de la valeur du paramètre "date"
      const currentDate = new Date();
      let dateFilterCondition = {};

      if (dateFilter === 'futures') {
        dateFilterCondition = {
          dateVisite: {
            gte: currentDate,
          },
        };
      } else if (dateFilter === 'passees') {
        dateFilterCondition = {
          dateVisite: {
            lt: currentDate,
          },
        };
      }

      // Récupérer toutes les visites pour l'utilisateur en appliquant le filtre de date
      const visites = await prisma.visite.findMany({
        where: {
          visiteurId: utilisateurId,
          ...dateFilterCondition,
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