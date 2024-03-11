-- CreateTable
CREATE TABLE "Email" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "source" TEXT NOT NULL,
    "sujet" TEXT NOT NULL,
    "emailDestinataire" TEXT NOT NULL,
    "dateExpedition" DATETIME NOT NULL
);
