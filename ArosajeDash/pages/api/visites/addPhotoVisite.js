import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import Security from '../../../utils/security';
import multer from 'multer';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import sharp from 'sharp';

const prisma = new PrismaClient();
const upload = promisify(multer().single('image'));

export const config = {
  api: {
    bodyParser: false,
  },
};

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

    // Utiliser multer pour traiter les fichiers multipart/form-data
    await upload(req, res);

    const userId = decoded.userId;
    const { visiteAccepteeId } = req.query;
    const imageFile = req.file;

    if (!visiteAccepteeId) {
      return res.status(400).json({ error: 'Le paramètre visiteAccepteeId est requis' });
    }

    if (!imageFile) {
      return res.status(400).json({ error: 'La photo est requise' });
    }

    try {
      // Vérifier si la visite acceptée à mettre à jour existe
      const visiteAccepteeToUpdate = await prisma.visiteAcceptee.findUnique({
        where: {
          id: visiteAccepteeId,
        },
        include: {
          visite: true,
        },
      });

      if (!visiteAccepteeToUpdate) {
        return res.status(404).json({ error: 'Visite acceptée non trouvée' });
      }

      // Vérifier si l'utilisateur est l'auteur de la visite ou administrateur
      if (!(await Security.isAdmin(userId)) && userId !== visiteAccepteeToUpdate.visite.visiteurId) {
        return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à modifier cette visite acceptée' });
      }

      // Suppression de l'ancienne image si elle existe
      if (visiteAccepteeToUpdate.cheminPhoto !== "") {
        // Construire le chemin complet du fichier à supprimer
        let filePath = visiteAccepteeToUpdate.cheminPhoto;
        // Vérifier si le fichier existe avant de le supprimer
        if (fs.existsSync(filePath)) {
          // Supprimer le fichier du système de fichiers
          fs.unlinkSync(filePath);
        }
      }

      // Ajout de la nouvelle image

      // Obtenir l'extension du fichier à partir du nom original
      const fileExtension = path.extname(imageFile.originalname);

      // Vérifier si l'extension est vide ou indéfinie
      if (!fileExtension || fileExtension.trim() === '') {
        return res.status(400).json({ error: 'L\'extension du fichier est manquante ou non valide' });
      }

      // Chemin vers le répertoire de stockage des images
      const uploadDirectory = path.join(process.cwd(), 'uploads');

      // S'assurer que le répertoire de stockage existe
      if (!fs.existsSync(uploadDirectory)) {
        fs.mkdirSync(uploadDirectory);
      }

      // Générer un UID pour le nom de fichier
      const uid = uuidv4();

      // Construire le chemin complet du fichier dans le répertoire de stockage avec l'UID comme nom de fichier et l'extension originale
      let cheminPhoto = path.join(uploadDirectory, `${uid}${fileExtension}`);

      // Compression de l'image avant de l'écrire sur le disque
      await sharp(imageFile.buffer)
        .resize({ width: imageFile.width, height: imageFile.height }) // Ajuste la largeur de l'image si nécessaire
        .toFile(cheminPhoto);

      // Mettre à jour les champs de la visite acceptée
      const visiteAccepteeUpdated = await prisma.visiteAcceptee.update({
        where: {
          id: visiteAccepteeId,
        },
        data: {
          cheminPhoto,
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
      console.error('Erreur lors de la mise à jour de la visite acceptée :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}