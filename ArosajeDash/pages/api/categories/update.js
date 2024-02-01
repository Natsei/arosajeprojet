import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import Security from '../../../utils/security';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
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

     // Vérifier si l'utilisateur a le droit de mettre à jour la catégorie
     if (!Security.isAdmin(decoded.userId)) {
        return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à mettre à jour une catégorie' });
      }

    const { categorieId } = req.query;

    if (!categorieId) {
      return res.status(400).json({ error: 'Le paramètre categorieId est requis' });
    }

    try {
      // Vérifier si la catégorie à mettre à jour existe
      const categorieToUpdate = await prisma.categorie.findUnique({
        where: {
          id: parseInt(categorieId),
        },
      });

      if (!categorieToUpdate) {
        return res.status(404).json({ error: 'Catégorie non trouvée' });
      }

      const { libelle } = req.body;

      //Test si la catégorie existe déjà
      const categorieExistante = await prisma.categorie.findUnique({
        where: {
          libelle,
          id: {
            not: parseInt(categorieId), // Exclure la categorie elle-même
          },
        },
        select: {
          id: true,
        },
      });

      if(categorieExistante){
        return res.status(400).json({ error: 'La catégorie existe déjà avec l\'id : ' + categorieExistante.id});
      }


      // Mettre à jour le libellé de la catégorie
      const categorieUpdated = await prisma.categorie.update({
        where: {
          id: parseInt(categorieId),
        },
        data: {
          libelle,
        },
      });

      res.status(200).json(categorieUpdated);
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la catégorie :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}