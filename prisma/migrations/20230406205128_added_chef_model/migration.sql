/*
  Warnings:

  - You are about to drop the column `chefId` on the `Recipe` table. All the data in the column will be lost.
  - Added the required column `chef_id` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "chefId",
ADD COLUMN     "chef_id" TEXT NOT NULL;
