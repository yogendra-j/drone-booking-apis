/*
  Warnings:

  - You are about to drop the column `droneShot` on the `booking` table. All the data in the column will be lost.
  - Added the required column `droneShotId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `droneSiteId` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `booking` DROP FOREIGN KEY `Booking_customerId_fkey`;

-- AlterTable
ALTER TABLE `booking` DROP COLUMN `droneShot`,
    ADD COLUMN `droneShotId` INTEGER NOT NULL,
    ADD COLUMN `droneSiteId` INTEGER NOT NULL,
    MODIFY `createdTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `customer` MODIFY `phoneNumber` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `DroneSite` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `latitude` DOUBLE NOT NULL,
    `longitude` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DroneShotType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `duration` INTEGER NOT NULL,
    `price` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `droneSiteId_fkey` FOREIGN KEY (`droneSiteId`) REFERENCES `DroneSite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `droneShotId_fkey` FOREIGN KEY (`droneShotId`) REFERENCES `DroneShotType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
