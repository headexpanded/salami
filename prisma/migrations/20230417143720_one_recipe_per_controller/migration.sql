/*
  Warnings:

  - You are about to drop the `_ControllerToRecipe` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ControllerToRecipe" DROP CONSTRAINT "_ControllerToRecipe_A_fkey";

-- DropForeignKey
ALTER TABLE "_ControllerToRecipe" DROP CONSTRAINT "_ControllerToRecipe_B_fkey";

-- AlterTable
ALTER TABLE "Controller" ADD COLUMN     "recipeId" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "_ControllerToRecipe";

-- AddForeignKey
ALTER TABLE "Controller" ADD CONSTRAINT "Controller_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
