/*
  Warnings:

  - The primary key for the `Chef` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `password` on the `Chef` table. All the data in the column will be lost.
  - The primary key for the `Recipe` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `RecipeSettings` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Controller" DROP CONSTRAINT "Controller_chefId_fkey";

-- DropForeignKey
ALTER TABLE "Controller" DROP CONSTRAINT "Controller_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "Recipe" DROP CONSTRAINT "Recipe_chefId_fkey";

-- DropForeignKey
ALTER TABLE "RecipeSettings" DROP CONSTRAINT "RecipeSettings_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "_RecipeToTag" DROP CONSTRAINT "_RecipeToTag_A_fkey";

-- AlterTable
ALTER TABLE "Chef" DROP CONSTRAINT "Chef_pkey",
DROP COLUMN "password",
ADD COLUMN     "emailVerified" TIMESTAMP(3),
ADD COLUMN     "image" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Chef_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Chef_id_seq";

-- AlterTable
ALTER TABLE "Controller" ALTER COLUMN "chefId" SET DATA TYPE TEXT,
ALTER COLUMN "recipeId" SET DEFAULT '1',
ALTER COLUMN "recipeId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Recipe" DROP CONSTRAINT "Recipe_pkey",
ALTER COLUMN "chefId" SET DATA TYPE TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Recipe_id_seq";

-- AlterTable
ALTER TABLE "RecipeSettings" DROP CONSTRAINT "RecipeSettings_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "recipeId" SET DATA TYPE TEXT,
ADD CONSTRAINT "RecipeSettings_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "RecipeSettings_id_seq";

-- AlterTable
ALTER TABLE "_RecipeToTag" ALTER COLUMN "A" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "chefId" TEXT NOT NULL,
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

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "chefId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_chefId_fkey" FOREIGN KEY ("chefId") REFERENCES "Chef"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Controller" ADD CONSTRAINT "Controller_chefId_fkey" FOREIGN KEY ("chefId") REFERENCES "Chef"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Controller" ADD CONSTRAINT "Controller_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeSettings" ADD CONSTRAINT "RecipeSettings_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_chefId_fkey" FOREIGN KEY ("chefId") REFERENCES "Chef"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_chefId_fkey" FOREIGN KEY ("chefId") REFERENCES "Chef"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeToTag" ADD CONSTRAINT "_RecipeToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
