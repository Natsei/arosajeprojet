import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import Security from '../../../utils/security';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    // Répondre favorablement aux requêtes OPTIONS pré-vol
    return res.status(200).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).end(); // Méthode non autorisée
  }

  const { description, auteurId, planteId } = req.body;
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(400).json({ error: 'Le token est requis dans les paramètres de la requête.' });
  }

  try {
    jwt.verify(token, 'secret_key', async (err, decoded) => {
        if (err) {
          return res.status(401).json({ error: 'Token non valide' });
        }

        //Test description
        if(!Security.isValidDescription(description)){
          return res.status(400).json({ error: 'La description ne doit pas dépasser 255 caractères.' });
        }

        const nouvelleAnnonce = await prisma.annonce.create({
        data: {
            description,
            datePublication: new Date(),
            auteurId,
            planteId,
        },
        });

        res.status(201).json(nouvelleAnnonce);
    });
  } catch (error) {
    console.error('Erreur lors de la création de l\'annonce :', error);
    res.status(500).json({ error: 'Erreur serveur' });
  } finally {
    await prisma.$disconnect();
  }
}