/*
  Warnings:

  - Made the column `nom` on table `Role` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateTable
CREATE TABLE "Commentaire" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "contenu" TEXT NOT NULL,
    "datePublication" DATETIME NOT NULL,
    "auteurId" TEXT NOT NULL,
    "visiteId" INTEGER NOT NULL,
    CONSTRAINT "Commentaire_auteurId_fkey" FOREIGN KEY ("auteurId") REFERENCES "Utilisateur" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Commentaire_visiteId_fkey" FOREIGN KEY ("visiteId") REFERENCES "Visite" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Role" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL
);
INSERT INTO "new_Role" ("id", "nom") SELECT "id", "nom" FROM "Role";
DROP TABLE "Role";
ALTER TABLE "new_Role" RENAME TO "Role";
CREATE UNIQUE INDEX "Role_nom_key" ON "Role"("nom");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
