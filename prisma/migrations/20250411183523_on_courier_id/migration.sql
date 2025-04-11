-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_courierId_fkey";

-- AlterTable
ALTER TABLE "Orders" ALTER COLUMN "courierId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_courierId_fkey" FOREIGN KEY ("courierId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
