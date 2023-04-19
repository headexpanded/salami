/*
  Warnings:

  - You are about to drop the column `ipAddress` on the `Controller` table. All the data in the column will be lost.
  - Added the required column `IPAddress` to the `Controller` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Controller" DROP COLUMN "ipAddress",
ADD COLUMN     "IPAddress" TEXT NOT NULL;
