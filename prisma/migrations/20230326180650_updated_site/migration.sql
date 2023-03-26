/*
  Warnings:

  - You are about to drop the column `latitude` on the `dronesite` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `dronesite` table. All the data in the column will be lost.
  - Added the required column `city` to the `DroneSite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `DroneSite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `DroneSite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipCode` to the `DroneSite` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `dronesite` DROP COLUMN `latitude`,
    DROP COLUMN `longitude`,
    ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `country` VARCHAR(191) NOT NULL,
    ADD COLUMN `state` VARCHAR(191) NOT NULL,
    ADD COLUMN `zipCode` VARCHAR(191) NOT NULL;
