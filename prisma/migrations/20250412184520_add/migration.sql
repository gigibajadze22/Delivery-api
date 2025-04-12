/*
  Warnings:

  - You are about to drop the column `orderId` on the `Users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_orderId_fkey";

-- DropIndex
DROP INDEX "Users_orderId_key";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "orderId";
