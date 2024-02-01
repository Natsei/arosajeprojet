import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import Security from '../../../utils/security';

const prisma = new PrismaClient();

export default async function handler(req, res) {
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

    const userId = decoded.userId;
    const { nom } = req.body;

    if (!nom) {
      return res.status(400).json({ error: 'Le champ "nom" est requis' });
    }

    try {

        // Vérifier si le token appartient à un administrateur
        if (!Security.isAdmin(userId)) {
            return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à ajouter un role' });
        }

         //Test si le role existe déjà
         const roleExistant = await prisma.role.findUnique({
          where: {
            libelle,
          },
          select: {
            id: true,
          },
        });

        if(roleExistant){
          return res.status(400).json({ error: 'Le role existe déjà avec l\'id : ' + roleExistant.id});
        }

        // Ajouter le rôle à la base de données
        const role = await prisma.role.create({
            data: {
            nom,
            },
        });

      res.status(201).json(role);
    } catch (error) {
      console.error('Erreur lors de l\'ajout du rôle :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}