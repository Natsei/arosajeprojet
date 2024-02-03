import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

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

    const { recherche,categorie } = req.query;

    try {


      var whereCondition = {}

      if(recherche){
        // Diviser la recherche en mots
        const motsRecherche = recherche.split(' ');

        // Récupérer toutes les plantes où le libellé et ou le libellé de la categorie ressemble à l'un des mots de la recherche
        whereCondition = {
          OR: motsRecherche.map((mot) => ({
            OR: [
              {
                libelle: {
                  contains: mot,
                },
              },
              {
                categorie: {
                  libelle: {
                    contains: mot,
                  },
                },
              },
            ],
          })),
        };

      }

      //Ajoute la condition de categorie si le paramètre est fourni
      if(categorie){
        whereCondition.categorieId = parseInt(categorie, 10)
      }

      // Récupérer toutes les plantes
      const plantes = await prisma.plante.findMany({
        where: whereCondition,
        select: {
          id: true,
          libelle: true,
          description: true,
          categorieId: true,
        },
      });

      res.status(200).json(plantes);
    } catch (error) {
      console.error('Erreur lors de la récupération des plantes :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}