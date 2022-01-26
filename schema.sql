DROP DATABASE IF EXISTS slicksession;

CREATE DATABASE `slicksession`;

USE `slicksession`;


CREATE TABLE `sessions` (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `text` TEXT NOT NULL,
  `date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE `sessions` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `sessions` (`id`,`text`, `date`) VALUES
(1,'Todays meeting will involve the following points...', CURRENT_TIMESTAMP);