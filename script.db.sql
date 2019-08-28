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

INSERT INTO `db`.`device` (`device_id`, `device_modelo`, `device_fabricante`, `device_capacidade_armazenamento`, `device_tamanho_tela`, `device_versao_so`)
 VALUES(1, 'Moto G1', 'Motorola', 1, 1, '1.0.1');
 INSERT INTO `db`.`device` (`device_id`, `device_modelo`, `device_fabricante`, `device_capacidade_armazenamento`, `device_tamanho_tela`, `device_versao_so`)
 VALUES(2, 'Moto G2', 'Motorola', 2, 2, '1.0.2');
 INSERT INTO `db`.`device` (`device_id`, `device_modelo`, `device_fabricante`, `device_capacidade_armazenamento`, `device_tamanho_tela`, `device_versao_so`)
 VALUES(3, 'Moto G3', 'Motorola', 3, 3, '1.0.3');