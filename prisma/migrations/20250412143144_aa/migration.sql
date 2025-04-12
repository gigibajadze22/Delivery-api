/*
  Warnings:

  - A unique constraint covering the columns `[orderId]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Orders_courierId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Users_orderId_key" ON "Users"("orderId");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;
