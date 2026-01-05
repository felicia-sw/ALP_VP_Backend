-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "full_name" VARCHAR(150),
    "location" VARCHAR(150),
    "bio" TEXT,
    "photo_url" VARCHAR(255),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "categories" (
    "category_id" SERIAL NOT NULL,
    "categories_name" VARCHAR(100) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "help_requests" (
    "help_request_id" SERIAL NOT NULL,
    "name_of_product" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "exchange_product_name" VARCHAR(255) NOT NULL,
    "help_request_location" VARCHAR(255) NOT NULL,
    "help_request_image_url" VARCHAR(255) NOT NULL DEFAULT '',
    "is_checkout" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "users_id" INTEGER NOT NULL,
    "categories_id" INTEGER NOT NULL,

    CONSTRAINT "help_requests_pkey" PRIMARY KEY ("help_request_id")
);

-- CreateTable
CREATE TABLE "exchange_informations" (
    "exchange_information_id" SERIAL NOT NULL,
    "exchange_information_name" VARCHAR(100) NOT NULL,
    "exchange_information_phone" VARCHAR(20) NOT NULL,
    "exchange_information_email" VARCHAR(150),
    "exchange_information_description" TEXT,
    "help_requests_id" INTEGER NOT NULL,

    CONSTRAINT "exchange_informations_pkey" PRIMARY KEY ("exchange_information_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "help_requests" ADD CONSTRAINT "help_requests_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "help_requests" ADD CONSTRAINT "help_requests_categories_id_fkey" FOREIGN KEY ("categories_id") REFERENCES "categories"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exchange_informations" ADD CONSTRAINT "exchange_informations_help_requests_id_fkey" FOREIGN KEY ("help_requests_id") REFERENCES "help_requests"("help_request_id") ON DELETE CASCADE ON UPDATE CASCADE;
