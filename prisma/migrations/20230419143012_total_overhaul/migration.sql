/*
  Warnings:

  - The primary key for the `Controller` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `IPAddress` on the `Controller` table. All the data in the column will be lost.
  - The primary key for the `Tag` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `ipAddress` to the `Controller` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_RecipeToTag" DROP CONSTRAINT "_RecipeToTag_B_fkey";

-- AlterTable
ALTER TABLE "Controller" DROP CONSTRAINT "Controller_pkey",
DROP COLUMN "IPAddress",
ADD COLUMN     "ipAddress" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "port" SET DEFAULT '5000',
ALTER COLUMN "port" SET DATA TYPE TEXT,
ADD CONSTRAINT "Controller_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Controller_id_seq";

-- AlterTable
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Tag_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Tag_id_seq";

-- AlterTable
ALTER TABLE "_RecipeToTag" ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "_RecipeToTag" ADD CONSTRAINT "_RecipeToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
