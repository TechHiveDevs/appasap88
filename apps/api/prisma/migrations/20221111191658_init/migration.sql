-- CreateTable
CREATE TABLE `Trainingcourses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Trainers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(191) NOT NULL,
    `lastname` VARCHAR(191) NOT NULL,
    `contactint` INTEGER NOT NULL,
    `trainingcoursesid` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Trainingqualifications` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `trainersid` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Blankevaluationform` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `text` VARCHAR(191) NOT NULL,
    `formcategories` ENUM('Facilities', 'Instructor', 'Course') NOT NULL DEFAULT 'Facilities',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Evaluationforms` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `evaluationdate` VARCHAR(191) NOT NULL,
    `evaluationtext` VARCHAR(191) NOT NULL,
    `evaluationtype` ENUM('Exam', 'Assignment', 'Feedback') NOT NULL DEFAULT 'Exam',
    `blankevaluationformid` INTEGER NULL,
    `trainingcoursesid` INTEGER NULL,
    `trainersid` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Evaluationquestions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `qusetiontext` VARCHAR(191) NOT NULL,
    `questiondescription` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Evaluationanswers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `answertext` VARCHAR(191) NOT NULL,
    `evaluationquestionsid` INTEGER NULL,
    `evaluationformsid` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Trainers` ADD CONSTRAINT `Trainers_trainingcoursesid_fkey` FOREIGN KEY (`trainingcoursesid`) REFERENCES `Trainingcourses`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Trainingqualifications` ADD CONSTRAINT `Trainingqualifications_trainersid_fkey` FOREIGN KEY (`trainersid`) REFERENCES `Trainers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Evaluationforms` ADD CONSTRAINT `Evaluationforms_blankevaluationformid_fkey` FOREIGN KEY (`blankevaluationformid`) REFERENCES `Blankevaluationform`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Evaluationforms` ADD CONSTRAINT `Evaluationforms_trainingcoursesid_fkey` FOREIGN KEY (`trainingcoursesid`) REFERENCES `Trainingcourses`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Evaluationforms` ADD CONSTRAINT `Evaluationforms_trainersid_fkey` FOREIGN KEY (`trainersid`) REFERENCES `Trainers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Evaluationanswers` ADD CONSTRAINT `Evaluationanswers_evaluationquestionsid_fkey` FOREIGN KEY (`evaluationquestionsid`) REFERENCES `Evaluationquestions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Evaluationanswers` ADD CONSTRAINT `Evaluationanswers_evaluationformsid_fkey` FOREIGN KEY (`evaluationformsid`) REFERENCES `Evaluationforms`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
