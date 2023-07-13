/*
 Warnings:
 
 - You are about to drop the `About` table. If the table is not empty, all the data it contains will be lost.
 - You are about to drop the `Banner` table. If the table is not empty, all the data it contains will be lost.
 - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
 - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
 
 */
-- DropTable
DROP TABLE "About";

-- DropTable
DROP TABLE "Banner";

-- DropTable
DROP TABLE "Product";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "email" VARCHAR(255) NOT NULL,
    "user_name" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "admin" BOOLEAN NOT NULL DEFAULT false,
    "cart" JSONB,
    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
DROP TABLE IF EXISTS "public"."products";

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.
-- Table Definition
CREATE TABLE "public"."products" (
    "id" numeric NOT NULL,
    "name" varchar NOT NULL,
    "type" varchar NOT NULL,
    "classify" varchar,
    "user_group" jsonb,
    "color" jsonb,
    "image_url" jsonb,
    "description" text,
    "properties" jsonb,
    "quantity" numeric NOT NULL DEFAULT 0,
    "price" numeric NOT NULL DEFAULT 0,
    "createdAt" timestamp NOT NULL DEFAULT now(),
    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "abouts" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "image_banner" VARCHAR(255) NOT NULL,
    "information" JSONB NOT NULL,
    "our_team" VARCHAR(255) NOT NULL,
    "member" JSONB NOT NULL,
    CONSTRAINT "abouts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "banners" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "banner" JSONB NOT NULL,
    CONSTRAINT "banners_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "orders" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" uuid,
    CONSTRAINT "orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id"),
    "orderDetail" JSONB NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "infomation" JSONB NOT NULL,
    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_user_name_key" ON "users"("user_name");

ALTER TABLE
    "public"."users"
ADD
    COLUMN "active" bool DEFAULT 'true';

ALTER TABLE
    "public"."products"
ADD
    COLUMN "active" bool DEFAULT 'true';