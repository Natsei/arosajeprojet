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
    const decoded = await new Promise((resolve, reject) => {
        jwt.verify(token, 'secret_key', (err, decoded) => {
        if (err) {
            console.error('Erreur lors de la vérification du token :', err);
            return reject('Token non valide');
        }
        resolve(decoded);
        });
    });

    const userId = decoded.userId;
    const { annonceId } = req.query;

    if (!annonceId) {
        return res.status(400).json({ error: 'Le paramètre annonceId est requis' });
    }

    try {
        // Vérifier si l'annonce à mettre à jour existe
        const annonceToUpdate = await prisma.annonce.findUnique({
        where: {
            id: parseInt(annonceId),
        },
        include: {
            auteur: true, // Inclure l'auteur de l'annonce
        },
        });

        if (!annonceToUpdate) {
        return res.status(404).json({ error: 'Annonce non trouvée' });
        }

        // Vérifier si l'utilisateur qui met à jour est l'auteur de l'annonce
        if (userId !== annonceToUpdate.auteur.id && !(await Security.isAdmin(userId))) {
        return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à mettre à jour cette annonce' });
        }

        const { description, planteId } = req.body;

        //Test description
        if(!Security.isValidDescription(description)){
        return res.status(400).json({ error: 'La description ne doit pas dépasser 255 caractères.' });
        }
        

        // Mettre à jour les champs de l'annonce
        const annonceUpdated = await prisma.annonce.update({
        where: {
            id: parseInt(annonceId),
        },
        data: {
            description,
            planteId: parseInt(planteId),
        },
        include: {
            auteur: true,
            plante: true,
            lesPhotos: true,
            lesVisites: true,
            // Ajoute d'autres relations que tu souhaites inclure
        },
        });

        res.status(200).json(annonceUpdated);
    } catch (error) {
        console.error('Erreur lors de la mise à jour de l\'annonce :', error);
        res.status(500).json({ error: 'Erreur serveur' });
    } finally {
        await prisma.$disconnect();
    }
    
}