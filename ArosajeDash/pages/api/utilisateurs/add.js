import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';;
import Security from '../../../utils/security';
import multer from 'multer';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid'; 
import sharp from 'sharp';
import bcrypt from 'bcrypt';


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
 
 

  try {
      // Utiliser multer pour traiter les fichiers multipart/form-data
      await upload(req, res);

      const { email, motDePasse, prenom, nom, ville, cp, rue, description } = req.body;

      //Test des champs
      //Test email
      if(!Security.isValidEmail(email)){
        return res.status(400).json({ error: 'L\'email n\'est pas valide.' });
      }
      //Test password
      if(!Security.isPasswordSecure(motDePasse)){
        return res.status(400).json({ error: 'Le mot de passe n\'est pas valide.' });
      }
      //Test description
      if(!Security.isValidDescription(description)){
        return res.status(400).json({ error: 'La description ne doit pas dépasser 255 caractères.' });
      }

      //Test si un utilisateur existe déjà
      const utilisateur = await prisma.utilisateur.findUnique({
        where: {
          email,
        },
        select: {
          id: true,
        },
      });

      if (utilisateur) {
        return res.status(404).json({ error: 'Un utilisateur utilise déjà cette adresse email.' });
      }

      // Récupérer le fichier image depuis la requête
      const imageFile = req.file;
      var cheminPhoto = "";
      if (imageFile) {
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
        const name = uid+fileExtension;
        // Construire le chemin complet du fichier dans le répertoire de stockage avec l'UID comme nom de fichier et l'extension originale
        cheminPhoto = path.join(uploadDirectory, name);

        // Compression de l'image avant de l'écrire sur le disque
        await sharp(imageFile.buffer)
        .resize({ width: imageFile.width, height: imageFile.height }) // Ajuste la largeur de l'image si nécessaire
        .toFile(cheminPhoto);

        cheminPhoto = name
      }
      
      //Chiffrement des données
      var rueChiffree = Security.encryptData(rue.toLowerCase());
     
      var hashPassword = await Security.hashPassword(motDePasse);
      const nouvelUtilisateur = await prisma.utilisateur.create({
        data: {
            email,
            motDePasse : hashPassword,
            prenom,
            nom,
            ville,
            cp,
            rue : rueChiffree,
            description,
            cheminPhoto,
            dateInscription: new Date(),
            dateDerniereConnexion: new Date(),
        },
      });

      //On retourne les données non chiffrées 
      nouvelUtilisateur.rue = rue;

      res.status(201).json(nouvelUtilisateur);

  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur :', error);
    res.status(500).json({ error: 'Erreur serveur' });
  } finally {
    await prisma.$disconnect();
  }
}