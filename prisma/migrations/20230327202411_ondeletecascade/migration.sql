-- DropForeignKey
ALTER TABLE `booking` DROP FOREIGN KEY `customerId_fkey`;

-- DropForeignKey
ALTER TABLE `booking` DROP FOREIGN KEY `droneShotId_fkey`;

-- DropForeignKey
ALTER TABLE `booking` DROP FOREIGN KEY `droneSiteId_fkey`;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `droneSiteId_fkey` FOREIGN KEY (`droneSiteId`) REFERENCES `DroneSite`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `droneShotId_fkey` FOREIGN KEY (`droneShotId`) REFERENCES `DroneShotType`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
