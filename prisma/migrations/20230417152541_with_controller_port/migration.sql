/*
  Warnings:

  - You are about to drop the column `publicIpAddress` on the `Controller` table. All the data in the column will be lost.
  - Added the required column `publicIPAddress` to the `Controller` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Controller" DROP COLUMN "publicIpAddress",
ADD COLUMN     "port" INTEGER NOT NULL DEFAULT 5000,
ADD COLUMN     "publicIPAddress" TEXT NOT NULL;
