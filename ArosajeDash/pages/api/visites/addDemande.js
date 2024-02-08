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

    // Récupérer les données de la requête
    const {
      dateVisite,
      dateInvitation,
      visiteurId,
      annonceId,
    } = req.body;

    // Vérifier que la date de la visite et la date d'invitation ne sont pas inférieures à la date du jour
    const now = new Date();

    if (new Date(dateVisite) < new Date(dateInvitation)) {
        return res.status(400).json({ error: 'La date de visite ne peut pas être antérieure à la date d\'invitation' });
      }

    if (new Date(dateVisite) < now || new Date(dateInvitation) < now) {
      return res.status(400).json({ error: 'Les dates de visite et d\'invitation ne peuvent pas être antérieures à la date du jour' });
    }

    const userId = decoded.userId;

    try {

        // Vérifier si l'utilisateur est l'auteur de l'annonce
        const annonce = await prisma.annonce.findUnique({
            where: {
            id: parseInt(annonceId, 10),
            },
            select: {
            auteurId: true,
            },
        });

        if (!annonce) {
            return res.status(404).json({ error: 'Annonce non trouvée' });
        }

        if (annonce.auteurId !== userId && !(await Security.isAdmin(userId))) {
            return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à ajouter cette visite' });
        }

      // Ajouter une nouvelle visite
      const nouvelleVisite = await prisma.visite.create({
        data: {
          dateVisite,
          dateInvitation,
          visiteurId,
          annonceId,
        },
        select: {
          id: true,
          dateVisite: true,
          dateInvitation: true,
          visiteur: {
            select: {
              id: true,
              email: true,
              prenom: true,
              nom: true,
            },
          },
          annonce: {
            select: {
              id: true,
              description: true,
              datePublication: true,
              auteur: {
                select: {
                  id: true,
                  email: true,
                  prenom: true,
                  nom: true,
                },
              },
              plante: {
                select: {
                  id: true,
                  libelle: true,
                  description: true,
                  categorie: {
                    select: {
                      id: true,
                      libelle: true,
                    },
                  },
                },
              },
              lesPhotos: {
                select: {
                  id: true,
                  cheminPhoto: true,
                },
              },
              lesVisites: {
                select: {
                  id: true,
                  dateVisite: true,
                  dateInvitation: true,
                  visiteur: {
                    select: {
                      id: true,
                      email: true,
                      prenom: true,
                      nom: true,
                    },
                  },
                  visiteAcceptee: {
                    select: {
                      dateAcceptation: true,
                      cheminPhoto: true,
                    },
                  },
                  visiteRefusee: {
                    select: {
                      dateRefus: true,
                    },
                  },
                },
              },
            },
          },
        },
      });

      res.status(201).json(nouvelleVisite);
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la visite :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    } finally {
      await prisma.$disconnect();
    }
  });
}