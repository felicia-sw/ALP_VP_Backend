/*
  Warnings:

  - The primary key for the `exchange_informations` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `help_request_id` on the `exchange_informations` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `exchange_informations` table. All the data in the column will be lost.
  - You are about to alter the column `exchange_information_name` on the `exchange_informations` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `exchange_information_phone` on the `exchange_informations` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.
  - You are about to alter the column `exchange_information_email` on the `exchange_informations` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(150)`.
  - The primary key for the `help_requests` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `help_requests` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `help_requests` table. All the data in the column will be lost.
  - You are about to alter the column `name_of_product` on the `help_requests` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `exchange_product_name` on the `help_requests` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `help_request_location` on the `help_requests` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `help_request_image_url` on the `help_requests` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `users` table. All the data in the column will be lost.
  - You are about to alter the column `username` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `email` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(150)`.
  - You are about to alter the column `password` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - Added the required column `help_requests_id` to the `exchange_informations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categories_id` to the `help_requests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `users_id` to the `help_requests` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "exchange_informations" DROP CONSTRAINT "exchange_informations_help_request_id_fkey";

-- DropForeignKey
ALTER TABLE "help_requests" DROP CONSTRAINT "help_requests_user_id_fkey";

-- AlterTable
ALTER TABLE "exchange_informations" DROP CONSTRAINT "exchange_informations_pkey",
DROP COLUMN "help_request_id",
DROP COLUMN "id",
ADD COLUMN     "exchange_information_id" SERIAL NOT NULL,
ADD COLUMN     "help_requests_id" INTEGER NOT NULL,
ALTER COLUMN "exchange_information_name" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "exchange_information_phone" SET DATA TYPE VARCHAR(20),
ALTER COLUMN "exchange_information_email" SET DATA TYPE VARCHAR(150),
ADD CONSTRAINT "exchange_informations_pkey" PRIMARY KEY ("exchange_information_id");

-- AlterTable
ALTER TABLE "help_requests" DROP CONSTRAINT "help_requests_pkey",
DROP COLUMN "id",
DROP COLUMN "user_id",
ADD COLUMN     "categories_id" INTEGER NOT NULL,
ADD COLUMN     "help_request_id" SERIAL NOT NULL,
ADD COLUMN     "users_id" INTEGER NOT NULL,
ALTER COLUMN "name_of_product" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "exchange_product_name" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "help_request_location" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "help_request_image_url" SET DATA TYPE VARCHAR(255),
ADD CONSTRAINT "help_requests_pkey" PRIMARY KEY ("help_request_id");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "id",
ADD COLUMN     "user_id" SERIAL NOT NULL,
ALTER COLUMN "username" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(150),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(100),
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("user_id");

-- CreateTable
CREATE TABLE "categories" (
    "category_id" SERIAL NOT NULL,
    "categories_name" VARCHAR(100) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("category_id")
);

-- AddForeignKey
ALTER TABLE "help_requests" ADD CONSTRAINT "help_requests_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "help_requests" ADD CONSTRAINT "help_requests_categories_id_fkey" FOREIGN KEY ("categories_id") REFERENCES "categories"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exchange_informations" ADD CONSTRAINT "exchange_informations_help_requests_id_fkey" FOREIGN KEY ("help_requests_id") REFERENCES "help_requests"("help_request_id") ON DELETE CASCADE ON UPDATE CASCADE;
