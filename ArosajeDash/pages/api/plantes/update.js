import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import Security from '../../../utils/security';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    // Répondre favorablement aux requêtes OPTIONS pré-vol
    return res.status(200).end();
  }
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

    const { planteId } = req.query;

    if (!planteId) {
      return res.status(400).json({ error: 'Le paramètre planteId est requis' });
    }

    try {
      // Vérifier si la plante à mettre à jour existe
      const planteToUpdate = await prisma.plante.findUnique({
        where: {
          id: parseInt(planteId),
        },
      });

      if (!planteToUpdate) {
        return res.status(404).json({ error: 'Plante non trouvée' });
      }

      // Vérifier si l'utilisateur a le droit de mettre à jour la plante
      if (!Security.isAdmin(decoded.userId)) {
        return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à mettre à jour une plante' });
      }

      const { libelle, description, categorieId } = req.body;

      //Test si la plante existe déjà
      const planteExistante = await prisma.categorie.findUnique({
        where: {
          libelle,
          id: {
            not: parseInt(planteId), // Exclure la plante elle-même
          },
        },
        select: {
          id: true,
        },
      });

      if(planteExistante){
        return res.status(400).json({ error: 'La plante existe déjà avec l\'id : ' + planteExistante.id});
      }

      // Mettre à jour les champs de la plante
      const planteUpdated = await prisma.plante.update({
        where: {
          id: parseInt(planteId),
        },
        data: {
          libelle,
          description,
          categorieId: parseInt(categorieId),
        },
      });

      res.status(200).json(planteUpdated);
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la plante :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}