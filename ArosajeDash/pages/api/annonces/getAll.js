import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import Security from '../../../utils/security';
import Map from '../../../utils/map';

const prisma = new PrismaClient();


/**
 * Retourne toutes les annonces
 * Accepte un paramètre recherche : recherche ->plante.libelle,plante.categorie.libelle
 * Accepte un paramètre rayon : recherche -> dans toutes les villes situé dans le rayon autour du code postal fournit (si pas de code postal,celui de l'utilisateur connecté)
 * Accepte un paramètre cp : code postal pour la recherche par rayon. Le rayon est obligatoire 
 * Accepte un pramètre categorie : L'id de la catégorie de la plante est strictement égal a l'id passé en paramètre
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
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
  const decoded = await new Promise((resolve, reject) => {
    jwt.verify(token, 'secret_key', (err, decoded) => {
      if (err) {
        console.error('Erreur lors de la vérification du token :', err);
        return reject('Token non valide');
      }
      resolve(decoded);
    });
  });

    const { recherche,rayon,categorie,cp } = req.query;


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
        const userId = decoded.userId;
        var leCodePostal = "";
        //S'il n'y a pas de code postal, utiliser celui de l'utilisateur connecté
        if(!cp){
            const utilisateur = await prisma.utilisateur.findUnique({
                where: {
                id : userId,
                },
                select: {
                ville: true,
                cp: true,
                rue: true,
                },
            });
            leCodePostal = utilisateur.cp;
        }else{
            if (!(await Security.isAdmin(userId))) {
                return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à consulter ces annonces' });
            }
            leCodePostal = cp;
        }
        
        // Récupérer la liste des villes dans le rayon donné pour l'utilisateur connecté depuis une autre API
        const villesProches = await Map.getVillesVoisines(leCodePostal,rayon); 

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
              description: true,
              cheminPhoto: true,
              ville: true,
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