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

    const userId = decoded.userId;
    const { utilisateurId } = req.query;

    if (!utilisateurId) {
      return res.status(400).json({ error: 'Le paramètre utilisateurId est requis' });
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
      if (userId !== utilisateurId && !Security.isAdmin(userId)) {
        return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à modifier cet utilisateur' });
      }


      const { motDePasse } = req.body;

      //Test des champs
      //Test password
      if(!Security.isPasswordSecure(motDePasse)){
        return res.status(400).json({ error: 'Le mot de passe n\'est pas valide.' });
      }

      // Mettre à jour les champs de l'utilisateur
      const utilisateurUpdated = await prisma.utilisateur.update({
        where: {
          id: utilisateurId,
        },
        data: {
          motDePasse,
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