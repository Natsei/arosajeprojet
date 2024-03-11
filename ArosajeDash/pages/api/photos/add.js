import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
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

    // Utiliser multer pour traiter les fichiers multipart/form-data
    await upload(req, res);

    const { annonceId } = req.body;

    if (!annonceId) {
      return res.status(400).json({ error: 'Le champ annonceId est requis' });
    }

    try {
        // Vérifier si l'annonce existe
        const annonceExistante = await prisma.annonce.findUnique({
            where: {
            id: parseInt(annonceId, 10),
            },
        });

        if (!annonceExistante) {
            return res.status(404).json({ error: 'Annonce non trouvée' });
        }

        // Récupérer le fichier image depuis la requête
        const imageFile = req.file;

        if (!imageFile) {
            return res.status(400).json({ error: 'Aucun fichier image fourni' });
        }

        // Obtenir l'extension du fichier à partir du nom original
        const fileExtension = path.extname(imageFile.originalname);

        // Vérifier si l'extension est vide ou indéfinie
        if (!fileExtension || fileExtension.trim() === '') {
            return res.status(400).json({ error: 'L\'extension du fichier est manquante ou non valide' });
        }

        // Chemin vers le répertoire de stockage des images
        const uploadDirectory = path.join(process.cwd(), 'public','img','uploads');

        // S'assurer que le répertoire de stockage existe
        if (!fs.existsSync(uploadDirectory)) {
            fs.mkdirSync(uploadDirectory);
        }

        // Générer un UID pour le nom de fichier
        const uid = uuidv4();

        // Construire le chemin complet du fichier dans le répertoire de stockage avec l'UID comme nom de fichier et l'extension originale
        const name = uid+fileExtension;
        const filePath = path.join(uploadDirectory, name);
        

        // Compression de l'image avant de l'écrire sur le disque
        await sharp(imageFile.buffer)
        .resize({ width: imageFile.width, height: imageFile.height }) // Ajuste la largeur de l'image si nécessaire
        .toFile(filePath);
        
        // Ajouter la nouvelle photo à l'annonce
        const nouvellePhoto = await prisma.photo.create({
            data: {
            cheminPhoto: name, 
            annonce: {
                connect: {
                id: parseInt(annonceId, 10),
                },
            },
            },
        });

      res.status(201).json(nouvellePhoto);
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la photo à l\'annonce :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}