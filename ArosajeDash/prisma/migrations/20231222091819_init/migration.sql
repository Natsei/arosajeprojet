/*
  Warnings:

  - You are about to drop the `CategoriePlante` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categorieId` to the `Plante` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Utilisateur" ADD COLUMN "cheminPhoto" TEXT;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CategoriePlante";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Visite" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dateVisite" DATETIME NOT NULL,
    "dateInvitation" DATETIME NOT NULL,
    "visiteurId" INTEGER NOT NULL,
    "annonceId" INTEGER NOT NULL,
    CONSTRAINT "Visite_visiteurId_fkey" FOREIGN KEY ("visiteurId") REFERENCES "Utilisateur" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Visite_annonceId_fkey" FOREIGN KEY ("annonceId") REFERENCES "Annonce" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "VisiteAcceptee" (
    "visiteId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dateAcceptation" DATETIME NOT NULL,
    "cheminPhoto" TEXT,
    CONSTRAINT "VisiteAcceptee_visiteId_fkey" FOREIGN KEY ("visiteId") REFERENCES "Visite" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "VisiteRefusee" (
    "visiteId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dateRefus" DATETIME,
    CONSTRAINT "VisiteRefusee_visiteId_fkey" FOREIGN KEY ("visiteId") REFERENCES "Visite" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Plante" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "libelle" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "categorieId" INTEGER NOT NULL,
    CONSTRAINT "Plante_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "Categorie" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Plante" ("description", "id", "libelle") SELECT "description", "id", "libelle" FROM "Plante";
DROP TABLE "Plante";
ALTER TABLE "new_Plante" RENAME TO "Plante";
CREATE UNIQUE INDEX "Plante_libelle_key" ON "Plante"("libelle");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
