import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Méthode non autorisée
  }

  const { email, motDePasse, prenom, nom, ville, cp, rue, description, cheminPhoto } = req.body;
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(400).json({ error: 'Le token est requis dans les paramètres de la requête.' });
  }

  try {
    jwt.verify(token, 'secret_key', async (err, decoded) => {
        if (err) {
          return res.status(401).json({ error: 'Token non valide' });
        }
        const nouvelUtilisateur = await prisma.utilisateur.create({
        data: {
            email,
            motDePasse,
            prenom,
            nom,
            ville,
            cp,
            rue,
            description,
            cheminPhoto,
            dateInscription: new Date(),
        },
        });

    res.status(201).json(nouvelUtilisateur);
    });
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur :', error);
    res.status(500).json({ error: 'Erreur serveur' });
  } finally {
    await prisma.$disconnect();
  }
}