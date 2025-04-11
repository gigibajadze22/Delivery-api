/*
  Warnings:

  - You are about to drop the column `amount` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `productsId` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the `products` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `courierId` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_productsId_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_statusId_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_userId_fkey";

-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "amount",
DROP COLUMN "productsId",
ADD COLUMN     "courierId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "products";

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_courierId_fkey" FOREIGN KEY ("courierId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
