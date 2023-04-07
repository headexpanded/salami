/*
  Warnings:

  - Added the required column `chefId` to the `Controller` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Controller" ADD COLUMN     "chefId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Controller" ADD CONSTRAINT "Controller_chefId_fkey" FOREIGN KEY ("chefId") REFERENCES "Chef"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
