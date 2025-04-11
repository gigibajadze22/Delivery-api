/*
  Warnings:

  - You are about to drop the column `productId` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `mobile` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `statusId` on the `Users` table. All the data in the column will be lost.
  - Added the required column `city` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusId` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_productId_fkey";

-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_userId_fkey";

-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_statusId_fkey";

-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "productId",
DROP COLUMN "userId",
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "productsId" INTEGER,
ADD COLUMN     "statusId" INTEGER NOT NULL,
ALTER COLUMN "comment" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "mobile",
DROP COLUMN "statusId";

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;
