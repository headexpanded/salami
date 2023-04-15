/*
  Warnings:

  - You are about to drop the column `description` on the `Controller` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Controller" DROP COLUMN "description",
ADD COLUMN     "location" TEXT;
