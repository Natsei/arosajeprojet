/*
  Warnings:

  - Made the column `dateDerniereConnexion` on table `Utilisateur` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Utilisateur" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "motDePasse" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "ville" TEXT,
    "cp" TEXT,
    "rue" TEXT,
    "description" TEXT,
    "cheminPhoto" TEXT,
    "dateInscription" DATETIME NOT NULL,
    "dateDerniereConnexion" DATETIME NOT NULL
);
INSERT INTO "new_Utilisateur" ("cheminPhoto", "cp", "dateDerniereConnexion", "dateInscription", "description", "email", "id", "motDePasse", "nom", "prenom", "rue", "ville") SELECT "cheminPhoto", "cp", "dateDerniereConnexion", "dateInscription", "description", "email", "id", "motDePasse", "nom", "prenom", "rue", "ville" FROM "Utilisateur";
DROP TABLE "Utilisateur";
ALTER TABLE "new_Utilisateur" RENAME TO "Utilisateur";
CREATE UNIQUE INDEX "Utilisateur_email_key" ON "Utilisateur"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
