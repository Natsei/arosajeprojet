import { PrismaClient, Utilisateur } from '@prisma/client';

const bcrypt = require("bcrypt");
const prisma = new PrismaClient();
const crypto = require('crypto');
const key = require('../key');


class Security {

    /**
     * Retourne le mot de passer hashé avec Bcrypt de l'utilisateur
     * @param password pasword
     * @returns 
     */
    static async hashPassword(password : string){
        return await bcrypt.hash(password, 10);
    }

    /**
     * Retourne true si les deux mots de passe correspondent
     * @param password pasword en clair
     * @param hashedPassword pasword hashé de la BDD
     * @returns 
     */
    static async comparePassword(password : string, hashedPassword : string){
        return await bcrypt.compare(password, hashedPassword);
    }

    /**
     * Retourne true si l'utilisateur est Administrateur
     * @param userId Id de l'utilisateur
     * @returns 
     */
    static async isAdmin(userId : string) : Promise<boolean> {
        
        var isAdmin = false;
        try {
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
            isAdmin = rolesUtilisateur.some((roleUtilisateur : any) => {
                console.log('Nom du rôle:', roleUtilisateur.role?.nom);
                return roleUtilisateur.role?.nom.toLowerCase() === 'administrateur';
            });
            

        } catch (error) {
            console.error('Erreur lors de la récupération de l\'utilisateur :', error);
        } finally {
            await prisma.$disconnect();
            
        }

        return isAdmin;
    }


    /**
     * Retourne true si l'utilisateur est Botaniste
     * @param userId Id de l'utilisateur
     * @returns 
     */
    static async isBotaniste(userId : string) : Promise<boolean> {
        
        var isBotaniste = false;
        try {
            // Récupération des roles de l'utilisateur
            const rolesUtilisateur = await prisma.roleUtilisateur.findMany({
                where: {
                utilisateurId: userId,
                },
                include: {
                role: true,
                },
            });
            //Retourne true si l'utilisateur est Botaniste
            isBotaniste = rolesUtilisateur.some((roleUtilisateur : any) => roleUtilisateur.role?.nom === 'Botaniste');

        } catch (error) {
            console.error('Erreur lors de la récupération de l\'utilisateur :', error);
        } finally {
            await prisma.$disconnect();
            
        }

        return isBotaniste;
    }

    /**
     * Verifie si le mot de passe correspond aux critères de sécurité
     * @param password 
     * @returns 
     */
    static isPasswordSecure(password : string) {
        var hasValidLength = false;
        // Vérifie si la longueur du mot de passe est d'au moins 8 caractères
        if (password.length >= 8) {
           hasValidLength = true;
        }
      
        // Vérifie s'il y a au moins une majuscule, une minuscule, un chiffre et un caractère spécial
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      
        // Retourne true si toutes les conditions sont satisfaites, sinon false
        return hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar && hasValidLength;
      }

      /**
       * Vérifie si l'adresse email est au bon format
       * @param email 
       * @returns 
       */
      static isValidEmail(email : string) {
        // Expression régulière pour la validation d'une adresse e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
        // Vérifie si l'adresse e-mail correspond à la regex
        return emailRegex.test(email);
      }


       /**
       * Vérifie si la description est au bon format
       * @param desc 
       * @returns 
       */
       static isValidDescription(desc : string) {
        var descValidLength = false;
        // Vérifie si la longueur de la description est valide
        if (desc.length <= 255) {
            descValidLength = true;
         }
      
        // Vérifie si l'adresse e-mail correspond à la regex
        return descValidLength;
      }

    /**
     * Retourne l'utilisateur si l'utilisateur existe
     * @param email email de l'utilisateur
     * @param password mot de passe en clair de l'utilisateur
     * @returns 
     */
    static async authUser(email : string, password : string) : Promise<Utilisateur|null> {
        
        var utilisateur = null;
        try {
           // Vérifier les informations d'identification
            utilisateur = await prisma.utilisateur.findUnique({
                where: {
                email,
                },
            });
            
            if (utilisateur && (await this.comparePassword(password, utilisateur.motDePasse))) {
                //Changemenet de la date de dernière connexion
                const utilisateurUpdated = await prisma.utilisateur.update({
                    where: {
                        id: utilisateur.id,
                    },
                    data: {
                        dateDerniereConnexion: new Date(),
                    },
                });
            }else{
                utilisateur = null;
            }
            
        } catch (error) {
            console.error('Erreur lors de la récupération de l\'utilisateur :', error);
        } finally {
            await prisma.$disconnect();
            
        }
        return utilisateur;
    }

    /**
     * Retourne la donnée chiffrée
     * @param data 
     * @returns 
     */
    static encryptData(data : any) {
        const chiffrement = crypto.createCipher('aes-256-cbc', key.encryptionKey);
        let donneeChiffree = chiffrement.update(data, 'utf8', 'hex');
        donneeChiffree += chiffrement.final('hex');
        return donneeChiffree;
    }

     /**
     * Retourne la donnée dechiffrée
     * @param donneeChiffree 
     * @returns 
     */
    static decryptData(donneeChiffree : any) {
        var donneeDehiffree = donneeChiffree;
        if( typeof donneeChiffree === 'string'){
            const dechiffrement = crypto.createDecipher('aes-256-cbc', key.encryptionKey);
            donneeDehiffree = dechiffrement.update(donneeChiffree, 'hex', 'utf8');
            donneeDehiffree += dechiffrement.final('utf8');
        }
       
        return donneeDehiffree;
    }
  
}

export default Security;