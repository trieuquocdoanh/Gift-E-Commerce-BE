/*
  Warnings:

  - Added the required column `meet_our_team` to the `abouts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "abouts" ADD COLUMN     "meet_our_team" VARCHAR(255) NOT NULL;
