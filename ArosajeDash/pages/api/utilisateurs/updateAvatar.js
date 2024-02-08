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
    console.log("test");
    const { utilisateurId } = req.query;
    const imageFile = req.file;

    
    if (!utilisateurId) {
      return res.status(400).json({ error: 'Le paramètre utilisateurId est requis' });
    }

    if (!imageFile) {
      return res.status(400).json({ error: 'La photo est requise' });
    }

    try {
      // Vérifier si l'utilisateur à mettre à jour existe
      const utilisateurToUpdate = await prisma.utilisateur.findUnique({
        where: {
          id: utilisateurId,
        },
      });

      if (!utilisateurToUpdate) {
        return res.status(404).json({ error: 'Utilisateur non trouvé' });
      }

      // Vérifier si le token appartient à l'utilisateur lui-même ou à un administrateur
      if (userId !== utilisateurId && !(await Security.isAdmin(userId))) {
        return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à modifier cet utilisateur' });
      }



      //Suppression de l'ancienne image si elle existe
      if(utilisateurToUpdate.cheminPhoto !== ""){
        // Construire le chemin complet du fichier à supprimer
        let filePath = utilisateurToUpdate.cheminPhoto;
        // Vérifier si le fichier existe avant de le supprimer
        if (fs.existsSync(filePath)) {
            // Supprimer le fichier du système de fichiers
            fs.unlinkSync(filePath);
        } 
      }


      //Ajout de la nouvelle image

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
      

      // Mettre à jour les champs de l'utilisateur
      const utilisateurUpdated = await prisma.utilisateur.update({
        where: {
          id: utilisateurId,
        },
        data: {
          cheminPhoto
        },
      });

      res.status(200).json(utilisateurUpdated);
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'utilisateur :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}