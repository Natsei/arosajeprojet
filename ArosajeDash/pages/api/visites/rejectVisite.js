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
    const { visiteId } = req.body;
    const userId = decoded.userId;

    try {

        // Vérifier si l'utilisateur est le visiteur 
        const visite = await prisma.visite.findUnique({
            where: {
            id: parseInt(visiteId, 10),
            },
            select: {
            visiteurId: true,

            },
        });

        if (!visite) {
            return res.status(404).json({ error: 'Visite non trouvée' });
        }

        if (visite.visiteurId !== userId) {
            return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à refuser cette visite' });
        }

        // date du jour
        const dateRefus = new Date();
        // Ajouter une nouvelle visite refusée
        const visiteRefusee = await prisma.visiteRefusee.create({
          data: {
            visiteId,
            dateRefus,
          },
          select: {
            visite: {
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
            },
            dateRefus: true,
          },
        });

        res.status(201).json(visiteRefusee);
      } catch (error) {
        console.error('Erreur lors du refus de la visite :', error);
        res.status(500).json({ error: 'Erreur serveur' });
      } finally {
        await prisma.$disconnect();
      }
  });
}