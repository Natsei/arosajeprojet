import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';
import Security from '../../../utils/security';

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: true,
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

    const { photoId } = req.query;
    const userId = decoded.userId;

    if (!photoId) {
      return res.status(400).json({ error: 'Le paramètre photoId est requis' });
    }

    try {
        // Récupérer les informations sur la photo
        const photo = await prisma.photo.findUnique({
            where: {
            id: parseInt(photoId, 10),
            },
        });

        if (!photo) {
            return res.status(404).json({ error: 'Photo non trouvée' });
        }

        //Vérification des droits

        // Récupére l'id de l'auteur de l'annonce
        const annonce = await prisma.annonce.findUnique({
            where: {
            id: photo.annonceId,
            },
            select: {
                auteurId: true,
            },
        });
        if (annonce.auteurId !== userId && !Security.isAdmin(userId)) {
            return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à supprimer cette photo' });
        }

        // Construire le chemin complet du fichier à supprimer
        const filePath = photo.cheminPhoto;

        // Vérifier si le fichier existe avant de le supprimer
        if (fs.existsSync(filePath)) {
            // Supprimer le fichier du système de fichiers
            fs.unlinkSync(filePath);

            // Supprimer la photo de la base de données
            await prisma.photo.delete({
            where: {
                id: parseInt(photoId, 10),
            },
            });

            res.status(200).json({ message: 'Photo supprimée avec succès' });
        } else {
            res.status(404).json({ error: 'Fichier photo non trouvé sur le système de fichiers ' + photo.cheminPhoto});
        }
    } catch (error) {
      console.error('Erreur lors de la suppression de la photo :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}