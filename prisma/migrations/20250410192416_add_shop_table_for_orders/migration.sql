-- CreateTable
CREATE TABLE "shop" (
    "id" SERIAL NOT NULL,
    "firstnameLastname" TEXT NOT NULL,
    "mobile" INTEGER NOT NULL,
    "adress" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "deliveryPrice" INTEGER NOT NULL,
    "sum" INTEGER NOT NULL,

    CONSTRAINT "shop_pkey" PRIMARY KEY ("id")
);
