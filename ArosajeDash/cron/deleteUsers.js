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


    //Les utilisateurs à supprimer : Connexion il y a 12mois



    users.forEach(function(user) {
        console.log(user);
        // send mail with defined transport object
        const info = transporter.sendMail({
            from: '"Arosaj" <app@arosaj.fr>', 
            to: user.email, 
            subject: "Arosaj - Votre compte va être supprimé", // Subject line
            html: "<p>Votre compte va être supprimé pour cause d'une inactivité supérieure à 1 an.</p></br></br><p>Vous avez 1 mois pour vous reconnecter.</p>", // html body
        });

        console.log("Message sent: %s", info.messageId);
    })
  
}

//Suppression des comptes

main();