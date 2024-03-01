// import { PrismaClient } from '@prisma/client';

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "61b55fca6aa6b8",
      pass: "096feb7b1df63b"
    }
});
  

//Envoi des emails de prévention
async function main() {

  
    //Les utilisateurs à prévenir : Connexion il y a 11mois
    const elevenMonthsAgo = new Date();
    elevenMonthsAgo.setMonth(elevenMonthsAgo.getMonth() - 11);

    // Récupérer la liste des utilisateurs avec derniereConnexion il y a 11 mois
    const users = await prisma.utilisateur.findMany({
        where: {
            dateDerniereConnexion: {
            lte: elevenMonthsAgo,
            },
        },
    });

     // Récupérer les emails avec la source "notification suppression de compte"
     const emailEnvoyes = await prisma.email.findMany({
        where: {
          source: 'notification suppression de compte',
          dateExpedition: {
            gte: elevenMonthsAgo,
          },
        },
        select: {
          emailDestinataire: true,
        },
      });
  
      // Filtrer les utilisateurs dont l'email est présent dans les emails avec la source spécifiée
      const filteredUsers = users.filter((user) => {
        return !emailEnvoyes.some((email) => email.emailDestinataire === user.email);
      });
      




    //Les utilisateurs à supprimer : Connexion il y a 12mois
    const twelveMonthsAgo = new Date();
    twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 12);
    // Suppression des utilisateurs avec derniereConnexion il y a 12 mois
    await prisma.utilisateur.deleteMany({
        where: {
            dateDerniereConnexion: {
            lte: twelveMonthsAgo,
            },
        },
    });




    //Envoi des email
    const sujet = '"Arosaj" <app@arosaj.fr>';
    const source = "notification suppression de compte"

    filteredUsers.forEach(function(user) {
        console.log(user);
        // send mail with defined transport object
        const info = transporter.sendMail({
            from: sujet, 
            to: user.email, 
            subject: "Arosaj - Votre compte va être supprimé", // Subject line
            html: "<p>Votre compte va être supprimé pour cause d'une inactivité supérieure à 1 an.</p></br></br><p>Vous avez 1 mois pour vous reconnecter.</p>", // html body
        });

        // Sauvegarder le message en base de données
        async function addEmailBdd(user) {
            const nouveauMessage = await prisma.email.create({
                data: {
                sujet,
                source,
                emailDestinataire: user.email,
                dateExpedition: new Date(),
                },
            });
        }
        addEmailBdd(user);


        console.log("Message sent: %s", info.messageId);
    })
  
}

main();