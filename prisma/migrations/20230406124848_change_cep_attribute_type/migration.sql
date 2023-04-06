/*
  Warnings:

  - Made the column `cep` on table `Client` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Client" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "home_number" INTEGER NOT NULL,
    "home_adress" TEXT
);
INSERT INTO "new_Client" ("cep", "home_adress", "home_number", "id", "name") SELECT "cep", "home_adress", "home_number", "id", "name" FROM "Client";
DROP TABLE "Client";
ALTER TABLE "new_Client" RENAME TO "Client";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
