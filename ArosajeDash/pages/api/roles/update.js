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

    const { roleId } = req.query;

    if (!roleId) {
      return res.status(400).json({ error: 'Le paramètre roleId est requis' });
    }

    try {
      // Vérifier si le rôle à mettre à jour existe
      const roleToUpdate = await prisma.role.findUnique({
        where: {
          id: parseInt(roleId),
        },
      });

      if (!roleToUpdate) {
        return res.status(404).json({ error: 'Rôle non trouvé' });
      }

      // Vérifier si l'utilisateur a le droit de mettre à jour le rôle
      if (!Security.isAdmin(decoded.userId)) {
        return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à mettre à jour un rôle' });
      }

      const { nom } = req.body;

       //Test si le role existe déjà
       const roleExistant = await prisma.role.findUnique({
        where: {
          libelle,
          id: {
            not: parseInt(roleId), // Exclure le role lui-même
          },
        },
        select: {
          id: true,
        },
      });

      if(roleExistant){
        return res.status(400).json({ error: 'Le role existe déjà avec l\'id : ' + roleExistant.id});
      }

      // Mettre à jour le nom du rôle
      const roleUpdated = await prisma.role.update({
        where: {
          id: parseInt(roleId),
        },
        data: {
          nom,
        },
      });

      res.status(200).json(roleUpdated);
    } catch (error) {
      console.error('Erreur lors de la mise à jour du rôle :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}