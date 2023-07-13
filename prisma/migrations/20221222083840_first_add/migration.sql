-- CreateTable
-- CREATE TABLE "User" (
--     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
--     "email" VARCHAR(255) NOT NULL,
--     "user_name" VARCHAR(255) NOT NULL,
--     "password" VARCHAR(255) NOT NULL,
--     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
--     "admin" BOOLEAN NOT NULL DEFAULT false,
--     "cart" JSONB NOT NULL,
--     CONSTRAINT "User_pkey" PRIMARY KEY ("id")
-- );
-- -- CreateTable
-- CREATE TABLE "Product" (
--     "id" numeric PRIMARY KEY NOT NULL,
--     "name" varchar NOT NULL,
--     "type" varchar NOT NULL,
--     "classify" varchar,
--     "user_group" jsonb,
--     "color" jsonb,
--     "image_url" jsonb,
--     "description" text,
--     "properties" jsonb,
--     "quantity" numeric NOT NULL DEFAULT 0,
--     "price" numeric NOT NULL DEFAULT 0,
--     "createdAt" timestamp NOT NULL DEFAULT NOW()
-- );
-- -- CreateTable
-- CREATE TABLE "About" (
--     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
--     "image_banner" VARCHAR(255) NOT NULL,
--     "information" JSONB NOT NULL,
--     "our_team" VARCHAR(255) NOT NULL,
--     "member" JSONB NOT NULL,
--     CONSTRAINT "About_pkey" PRIMARY KEY ("id")
-- );
-- -- CreateTable
-- CREATE TABLE "Banner" (
--     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
--     "banner" JSONB NOT NULL,
--     CONSTRAINT "Banner_pkey" PRIMARY KEY ("id")
-- );
DROP TABLE IF EXISTS "public"."wish-list";

CREATE SEQUENCE IF NOT EXISTS "wish-list_id_seq";

CREATE TABLE "public"."wish-list" (
    "id" int4 NOT NULL DEFAULT nextval('"wish-list_id_seq"' :: regclass),
    "userId" uuid NOT NULL,
    "product_id" numeric NOT NULL,
    CONSTRAINT "wish-list_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id"),
    CONSTRAINT "wish-list_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id"),
    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_user_name_key" ON "User"("user_name");