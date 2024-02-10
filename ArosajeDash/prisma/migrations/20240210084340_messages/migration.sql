-- CreateTable
CREATE TABLE "Message" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "contenu" TEXT NOT NULL,
    "datePublication" DATETIME NOT NULL,
    "auteurId" TEXT NOT NULL,
    "destinataireId" TEXT NOT NULL,
    CONSTRAINT "Message_auteurId_fkey" FOREIGN KEY ("auteurId") REFERENCES "Utilisateur" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Message_destinataireId_fkey" FOREIGN KEY ("destinataireId") REFERENCES "Utilisateur" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
