import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import Security from '../../../utils/security';
import path from 'path';
import fs from 'fs';

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: true,
  },
};


export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    // Répondre favorablement aux requêtes OPTIONS pré-vol
    return res.status(200).end();
  }
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
    const { utilisateurId } = req.query;
    

    if (!utilisateurId) {
      return res.status(400).json({ error: 'Le paramètre utilisateurId est requis' });
    }

    try {

      // Vérifier si l'utilisateur à supprimer existe
      const utilisateurASupprimer = await prisma.utilisateur.findUnique({
        where: {
          id: utilisateurId,
        },
      });

      if (!utilisateurASupprimer) {
        return res.status(404).json({ error: 'Utilisateur non trouvé' });
      }

      // Vérifier si le token appartient à l'utilisateur lui-même ou à un administrateur
      if (userId !== utilisateurId && !(await Security.isAdmin(userId))) {
        return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à supprimer cet utilisateur' });
      }

      // Supprimer l'utilisateur de la base de données
      await prisma.utilisateur.delete({
        where: {
          id: utilisateurId,
        },
      });


      if(utilisateurASupprimer.cheminPhoto !== ""){

        // Chemin vers le répertoire de stockage des images
        const uploadDirectory = path.join(process.cwd(), 'public','img','uploads');

        // Construire le chemin complet du fichier à supprimer
        const filePath = uploadDirectory+utilisateurASupprimer.cheminPhoto;

        // Vérifier si le fichier existe avant de le supprimer
        if (fs.existsSync(filePath)) {
            // Supprimer le fichier du système de fichiers
            fs.unlinkSync(filePath);
        } 
        
      }

      res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'utilisateur :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}