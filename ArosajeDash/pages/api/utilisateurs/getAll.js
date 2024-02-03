import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import Security from '../../../utils/security';

const prisma = new PrismaClient();

/**
 * Retourne tous les utilisateurs
 * Accepte un paramètre recherche : recherche ->nom,prénom,email
 * Accepte un paramètre ville : recherche -> ville
 * Accepte un pramètre role : Possède un role strictement égal au nom passé en paramètre
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

    const { recherche, role, ville } = req.query;

    try {
      var whereCondition = {};

      // Ajouter la condition pour la recherche si le paramètre est fourni
      if (recherche) {
        const motsRecherche = recherche.split(' ');
        whereCondition = {
          OR: motsRecherche.map((mot) => ({
            OR: [
              {
                nom: {
                  contains: mot,
                },
              },
              {
                prenom: {
                  contains: mot,
                },
              },
              {
                email: {
                  contains: mot,
                },
              },
            ],
          })),
        };
      }

      // Ajouter la condition pour le rôle si le paramètre est fourni
      if (role) {
        whereCondition.rolesUtilisateurs = {
          some: {
            role: {
              nom: role,
            },
          },
        };
      }

      // Ajouter la condition pour la ville si le paramètre est fourni
      if (ville) {
        whereCondition.ville = {
          contains: ville
        };
      }

      // Récupérer tous les utilisateurs avec les conditions définies
      const utilisateurs = await prisma.utilisateur.findMany({
        where: whereCondition,
        select: {
          id: true,
          email: true,
          prenom: true,
          nom: true,
          ville: true,
          cp: true,
          rue: true,
          description: true,
          cheminPhoto: true,
          dateInscription: true,
        }
      });

      res.status(200).json(utilisateurs);
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}