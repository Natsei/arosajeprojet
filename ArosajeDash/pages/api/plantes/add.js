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
    const { libelle, description, categorieId } = req.body;

    try {

        // Vérifier si le token appartient à un administrateur
        if (!(await Security.isAdmin(userId))) {
            return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à ajouter une plante' });
        }

        //Test si la plante existe déjà
        const planteExistante = await prisma.categorie.findUnique({
          where: {
            libelle,
          },
          select: {
            id: true,
          },
        });

        if(planteExistante){
          return res.status(400).json({ error: 'La plante existe déjà avec l\'id : ' + planteExistante.id});
        }


        // Créer une nouvelle plante
        const plante = await prisma.plante.create({
            data: {
            libelle,
            description,
            categorieId,
            },
            select: {
            id: true,
            libelle: true,
            description: true,
            categorieId: true,
            },
        });

        res.status(200).json(plante);
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la plante :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}