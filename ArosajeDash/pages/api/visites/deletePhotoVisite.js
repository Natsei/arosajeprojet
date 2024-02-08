import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import Security from '../../../utils/security';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
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
    const { visiteAccepteeId } = req.query;

    if (!visiteAccepteeId) {
      return res.status(400).json({ error: 'Le paramètre visiteAccepteeId est requis' });
    }

    try {
      // Vérifier si la visite acceptée à supprimer existe
      const visiteAccepteeToDelete = await prisma.visiteAcceptee.findUnique({
        where: {
          id: visiteAccepteeId,
        },
        include: {
          visite: true,
        },
      });

      if (!visiteAccepteeToDelete) {
        return res.status(404).json({ error: 'Visite acceptée non trouvée' });
      }


      // Vérifier si l'utilisateur est l'auteur de la visite ou administrateur
      if (!(await Security.isAdmin(userId)) && userId !== visiteAccepteeToDelete.visite.visiteurId) {
        return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à supprimer cette visite acceptée' });
      }

      // Suppression de l'ancienne image si elle existe
      if (visiteAccepteeToDelete.cheminPhoto !== "") {
        // Construire le chemin complet du fichier à supprimer
        let filePath = visiteAccepteeToDelete.cheminPhoto;
        // Vérifier si le fichier existe avant de le supprimer
        if (fs.existsSync(filePath)) {
          // Supprimer le fichier du système de fichiers
          fs.unlinkSync(filePath);
        }
      }

      // Mettre à jour les champs de la visite acceptée
      const visiteAccepteeUpdated = await prisma.visiteAcceptee.update({
        where: {
          id: visiteAccepteeId,
        },
        data: {
          cheminPhoto: null, // Supprimer le cheminPhoto
        },
        select: {
          visite: {
            select: {
                id: true,
                dateVisite: true,
                dateInvitation: true,
                visiteur: {
                  select: {
                    id: true,
                    email: true,
                    prenom: true,
                    nom: true,
                  },
                },
            },
          },
          dateAcceptation: true,
          cheminPhoto: true,
        },
      });

      res.status(200).json(visiteAccepteeUpdated);
    } catch (error) {
      console.error('Erreur lors de la suppression de la visite acceptée :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}