-- CreateTable
CREATE TABLE "ShoppingCart" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "ShoppingCart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShoppingCartItem" (
    "cartId" INTEGER NOT NULL,
    "helpRequestId" INTEGER NOT NULL,
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShoppingCartItem_pkey" PRIMARY KEY ("cartId","helpRequestId")
);

-- CreateIndex
CREATE UNIQUE INDEX "ShoppingCart_userId_key" ON "ShoppingCart"("userId");

-- AddForeignKey
ALTER TABLE "ShoppingCart" ADD CONSTRAINT "ShoppingCart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShoppingCartItem" ADD CONSTRAINT "ShoppingCartItem_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "ShoppingCart"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShoppingCartItem" ADD CONSTRAINT "ShoppingCartItem_helpRequestId_fkey" FOREIGN KEY ("helpRequestId") REFERENCES "help_requests"("help_request_id") ON DELETE CASCADE ON UPDATE CASCADE;
