import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import Security from '../../../utils/security';
import NextCors from 'nextjs-cors';

const prisma = new PrismaClient();

export default async function handler(req, res) {

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });
 
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
      if (userId !== utilisateurId && !(await Security.isAdmin(userId))) {
        return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à modifier cet utilisateur' });
      }


      const { email, prenom, nom, ville, cp, rue, description } = req.body;

      //Test des champs
      //Test email
      if(!Security.isValidEmail(email)){
        return res.status(400).json({ error: 'L\'email n\'est pas valide.' });
      }
      //Test description
      if(!Security.isValidDescription(description)){
        return res.status(400).json({ error: 'La description ne doit pas dépasser 255 caractères.' });
      }

      // Vérifier si l'email est déjà utilisé par un autre utilisateur (autre que lui-même)
      const utilisateurExistantEmail = await prisma.utilisateur.findFirst({
        where: {
          id: {
            not: utilisateurId, // Exclure l'utilisateur lui-même
          },
          email: {
            equals: email,
          },
        },
      });

      if (utilisateurExistantEmail) {
        return res.status(400).json({ error: 'Cet email est déjà utilisé par un autre utilisateur' });
      }



      // Mettre à jour les champs de l'utilisateur
      const utilisateurUpdated = await prisma.utilisateur.update({
        where: {
          id: utilisateurId,
        },
        data: {
          email,
          prenom,
          nom,
          ville,
          cp,
          rue,
          description,
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