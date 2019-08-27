CREATE SCHEMA IF NOT EXISTS `db`;

CREATE TABLE `db`.`device` (
  `device_id` INT NOT NULL AUTO_INCREMENT,
  `device_modelo` VARCHAR(45) NOT NULL,
  `device_fabricante` VARCHAR(60) NOT NULL,
  `device_capacidade_armazenamento` INT NOT NULL,
  `device_tamanho_tela` INT NOT NULL,
  `device_versao_so` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`device_id`),
  UNIQUE INDEX `device_id_UNIQUE` (`device_id` ASC) VISIBLE);
