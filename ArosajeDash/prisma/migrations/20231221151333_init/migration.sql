-- CreateTable
CREATE TABLE "Utilisateur" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "motDePasse" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "ville" TEXT,
    "cp" TEXT,
    "rue" TEXT,
    "description" TEXT,
    "dateInscription" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Role" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT
);

-- CreateTable
CREATE TABLE "RoleUtilisateur" (
    "utilisateurId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,

    PRIMARY KEY ("utilisateurId", "roleId"),
    CONSTRAINT "RoleUtilisateur_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RoleUtilisateur_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Photo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cheminPhoto" TEXT NOT NULL,
    "annonceId" INTEGER NOT NULL,
    CONSTRAINT "Photo_annonceId_fkey" FOREIGN KEY ("annonceId") REFERENCES "Annonce" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Annonce" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "datePublication" DATETIME NOT NULL,
    "auteurId" INTEGER NOT NULL,
    "planteId" INTEGER NOT NULL,
    CONSTRAINT "Annonce_auteurId_fkey" FOREIGN KEY ("auteurId") REFERENCES "Utilisateur" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Annonce_planteId_fkey" FOREIGN KEY ("planteId") REFERENCES "Plante" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Plante" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "libelle" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Categorie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "libelle" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CategoriePlante" (
    "planteId" INTEGER NOT NULL,
    "categorieId" INTEGER NOT NULL,

    PRIMARY KEY ("planteId", "categorieId"),
    CONSTRAINT "CategoriePlante_planteId_fkey" FOREIGN KEY ("planteId") REFERENCES "Plante" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CategoriePlante_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "Categorie" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_email_key" ON "Utilisateur"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Plante_libelle_key" ON "Plante"("libelle");

-- CreateIndex
CREATE UNIQUE INDEX "Categorie_libelle_key" ON "Categorie"("libelle");
