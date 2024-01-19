/*
  Warnings:

  - You are about to drop the column `options` on the `Product` table. All the data in the column will be lost.
  - Added the required column `calories` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `carbs` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fat` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protiens` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "addOns",
ADD COLUMN     "addOns" JSONB[],
ADD COLUMN     "calories" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "carbs" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "fat" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "protiens" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "weight" DECIMAL(65,30) NOT NULL;
