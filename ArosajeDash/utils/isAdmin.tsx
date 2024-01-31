import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function isAdmin(userId : string) {

    // Récupération des roles de l'utilisateur
    const rolesUtilisateur = await prisma.roleUtilisateur.findMany({
        where: {
        utilisateurId: userId,
        },
        include: {
        role: true,
        },
    });
    //Retourne true si l'utilisateur est Admin
    return rolesUtilisateur.some((roleUtilisateur) => roleUtilisateur.role?.nom === 'Administrateur');

}