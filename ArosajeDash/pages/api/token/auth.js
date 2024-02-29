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

  const { email, motDePasse } = req.body;

  if (!email || !motDePasse) {
    return res.status(400).json({ error: 'L\'adresse email et le mot de passe sont requis dans le corps de la requête.' });
  }

  try {
    // Vérifier les informations d'identification
    var utilisateur = await Security.authUser(email,motDePasse);
    if (!utilisateur) {
      return res.status(401).json({ error: 'Informations d\'identification incorrectes.' });
    }

    // Générer le token JWT
    const token = jwt.sign({ userId: utilisateur.id }, 'secret_key', { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error('Erreur lors de l\'authentification :', error);
    res.status(500).json({ error: 'Erreur serveur' });
  } finally {
    await prisma.$disconnect();
  }
}