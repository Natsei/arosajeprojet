import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import Security from '../../../utils/security';
import Map from '../../../utils/map';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end(); // Méthode non autorisée
  }

  // Récupérer le token d'authentification depuis l'en-tête
  const token = req.headers.authorization?.split(' ')[1];

  // Vérifier la validité du token
  const decoded = await new Promise((resolve, reject) => {
    jwt.verify(token, 'secret_key', (err, decoded) => {
      if (err) {
        console.error('Erreur lors de la vérification du token :', err);
        return reject('Token non valide');
      }
      resolve(decoded);
    });
  });

    const { recherche,rayon,categorie } = req.query;


    try {

      var whereCondition = {}

      if(recherche){
        // Diviser la recherche en mots
        const motsRecherche = recherche.split(' ');

        // Récupérer toutes les annonces où le libellé de la plante ou de la catégorie ressemble à l'un des mots de la recherche
        whereCondition = {
            OR: motsRecherche.map((mot) => ({
            OR: [
                {
                plante: {
                    libelle: {
                    contains: mot,
                    },
                },
                },
                {
                plante: {
                    categorie: {
                    libelle: {
                        contains: mot,
                    },
                    },
                },
                },
            ],
            })),
        };
      }

      //Ajoute la condition de categorie si le paramètre est fourni
      if(categorie){
        whereCondition.plante = {
            categorieId: parseInt(categorie, 10),
          }
      }

      // Ajouter la condition pour le rayon si le paramètre est fourni
      if (rayon) {
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

        whereCondition.auteur = {
          cp: {
            in: villesProches,
          },
        };
      }

      // Récupérer toutes les annonces avec les conditions définies
      const annonces = await prisma.annonce.findMany({
        where: whereCondition,
        include: {
          auteur: {
            select: {
              id: true,
              email: true,
              prenom: true,
              nom: true,
            },
          },
          plante: {
            select: {
              id: true,
              libelle: true,
              description: true,
              categorie: {
                select: {
                  id: true,
                  libelle: true,
                },
              },
            },
          },
          lesPhotos: {
            select: {
              id: true,
              cheminPhoto: true,
            },
          },
        },
      });

      res.status(200).json(annonces);
    } catch (error) {
      console.error('Erreur lors de la recherche des annonces :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }

}