/*
  Warnings:

  - Added the required column `chefId` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "chefId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Chef" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Chef_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Chef_name_key" ON "Chef"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Chef_email_key" ON "Chef"("email");
