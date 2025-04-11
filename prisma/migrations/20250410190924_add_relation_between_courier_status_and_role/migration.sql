/*
  Warnings:

  - Added the required column `statusId` to the `Courier` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Courier" ADD COLUMN     "roleId" INTEGER NOT NULL DEFAULT 3,
ADD COLUMN     "statusId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Courier" ADD CONSTRAINT "Courier_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Courier" ADD CONSTRAINT "Courier_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
