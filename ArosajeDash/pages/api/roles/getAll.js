import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import Security from '../../../utils/security';

const prisma = new PrismaClient();

/**
 * Retourne tous les roles
 * Accepte un paramètre recherche : recherche ->nom
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

    const { recherche } = req.query;

    try {

      var whereCondition = {}

      if(recherche){
        // Diviser la recherche en mots
        const motsRecherche = recherche.split(' ');

        // Récupérer tous les roles où le libellé ressemble à l'un des mots de la recherche
        whereCondition = {
          OR: motsRecherche.map((mot) => ({
            nom: {
              contains: mot,
            },
          })),
        };

      }

      // Vérifier si l'utilisateur a le droit de récupérer tous les rôles
      if (!Security.isAdmin(decoded.userId)) {
        return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à récupérer tous les rôles' });
      }

      // Récupérer tous les rôles
      const roles = await prisma.role.findMany({
        where: whereCondition,
      });

      res.status(200).json(roles);
    } catch (error) {
      console.error('Erreur lors de la récupération des rôles :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}