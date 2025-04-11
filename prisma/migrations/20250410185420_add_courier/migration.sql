-- CreateTable
CREATE TABLE "Courier" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "mobile" INTEGER NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Courier_pkey" PRIMARY KEY ("id")
);
