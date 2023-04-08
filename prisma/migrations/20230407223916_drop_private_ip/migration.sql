/*
  Warnings:

  - You are about to drop the column `privateIpAddress` on the `Controller` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Controller" DROP COLUMN "privateIpAddress";
