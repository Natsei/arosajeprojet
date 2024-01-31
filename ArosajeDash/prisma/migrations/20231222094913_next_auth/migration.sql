/*
  Warnings:

  - The primary key for the `RoleUtilisateur` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Utilisateur` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Utilisateur" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" DATETIME NOT NULL,
    CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Utilisateur" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Visite" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dateVisite" DATETIME NOT NULL,
    "dateInvitation" DATETIME NOT NULL,
    "visiteurId" TEXT NOT NULL,
    "annonceId" INTEGER NOT NULL,
    CONSTRAINT "Visite_visiteurId_fkey" FOREIGN KEY ("visiteurId") REFERENCES "Utilisateur" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Visite_annonceId_fkey" FOREIGN KEY ("annonceId") REFERENCES "Annonce" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Visite" ("annonceId", "dateInvitation", "dateVisite", "id", "visiteurId") SELECT "annonceId", "dateInvitation", "dateVisite", "id", "visiteurId" FROM "Visite";
DROP TABLE "Visite";
ALTER TABLE "new_Visite" RENAME TO "Visite";
CREATE TABLE "new_RoleUtilisateur" (
    "utilisateurId" TEXT NOT NULL,
    "roleId" INTEGER NOT NULL,

    PRIMARY KEY ("utilisateurId", "roleId"),
    CONSTRAINT "RoleUtilisateur_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RoleUtilisateur_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_RoleUtilisateur" ("roleId", "utilisateurId") SELECT "roleId", "utilisateurId" FROM "RoleUtilisateur";
DROP TABLE "RoleUtilisateur";
ALTER TABLE "new_RoleUtilisateur" RENAME TO "RoleUtilisateur";
CREATE TABLE "new_Annonce" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "datePublication" DATETIME NOT NULL,
    "auteurId" TEXT NOT NULL,
    "planteId" INTEGER NOT NULL,
    CONSTRAINT "Annonce_auteurId_fkey" FOREIGN KEY ("auteurId") REFERENCES "Utilisateur" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Annonce_planteId_fkey" FOREIGN KEY ("planteId") REFERENCES "Plante" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Annonce" ("auteurId", "datePublication", "description", "id", "planteId") SELECT "auteurId", "datePublication", "description", "id", "planteId" FROM "Annonce";
DROP TABLE "Annonce";
ALTER TABLE "new_Annonce" RENAME TO "Annonce";
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
    "dateInscription" DATETIME NOT NULL
);
INSERT INTO "new_Utilisateur" ("cheminPhoto", "cp", "dateInscription", "description", "email", "id", "motDePasse", "nom", "prenom", "rue", "ville") SELECT "cheminPhoto", "cp", "dateInscription", "description", "email", "id", "motDePasse", "nom", "prenom", "rue", "ville" FROM "Utilisateur";
DROP TABLE "Utilisateur";
ALTER TABLE "new_Utilisateur" RENAME TO "Utilisateur";
CREATE UNIQUE INDEX "Utilisateur_email_key" ON "Utilisateur"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");
