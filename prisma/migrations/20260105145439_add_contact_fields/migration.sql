/*
  Warnings:

  - Added the required column `contact_email` to the `help_requests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contact_phone` to the `help_requests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "help_requests" ADD COLUMN     "contact_email" VARCHAR(150) NOT NULL,
ADD COLUMN     "contact_phone" VARCHAR(20) NOT NULL;
