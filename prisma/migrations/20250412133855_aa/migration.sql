/*
  Warnings:

  - A unique constraint covering the columns `[courierId]` on the table `Orders` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Orders_courierId_key" ON "Orders"("courierId");
