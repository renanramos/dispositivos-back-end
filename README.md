# Dispositivos (back-end)

Aplicação back-end desenvolvida em NodeJS para persistência de informações de dispositivos móveis. 

## Ferramentas utilizadas

* NodeJS v10.16.3
* MySQL 8.0.17
 
Abaixo seguem pacotes/modulos utilizados para o desenvolvimento:

* Express 4.17.1
* mysql 2.17.1

 ## Configuração e instalação

#### Banco de dados

As informações são persistidas em uma instância do MySQL Server. Então, para criar o banco, assim como a tabela
e os campos necessários para o correto funcionamento, utilize o script abaixo.
    
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

        ### DML
        INSERT INTO `db`.`device` (`device_id`, `device_modelo`, `device_fabricante`, `device_capacidade_armazenamento`, `device_tamanho_tela`, `device_versao_so`)
         VALUES(1, 'Moto G1', 'Motorola', 1, 1, '1.0.1');
         INSERT INTO `db`.`device` (`device_id`, `device_modelo`, `device_fabricante`, `device_capacidade_armazenamento`, `device_tamanho_tela`, `device_versao_so`)
         VALUES(2, 'Moto G2', 'Motorola', 2, 2, '1.0.2');
         INSERT INTO `db`.`device` (`device_id`, `device_modelo`, `device_fabricante`, `device_capacidade_armazenamento`, `device_tamanho_tela`, `device_versao_so`)
         VALUES(3, 'Moto G3', 'Motorola', 3, 3, '1.0.3');
 
 
#### Configurando a aplicação

Acesse uma pasta de seu diretório de preferência e execute os comandos abaixo:

**Clone do projeto**
```
git clone https://github.com/renanramos/dispositivos-back-end.git
```

**Instalação dos pacotes**

Abra a pasta do projeto através do `cmd` ou pela `IDE` e instale as dependências:

```npm i ``` ou ```npm install```.

> Importante: lembre-se verificar/alterar as informações registradas no arquivo `.env` 

Depois de instaladas as dependências, execute o projeto com `npm start`. Após a inicialização, o server irá ativar um 
serviço em **localhost:5000** . 

###### Endpoints

*  **(get)** /devices : consulta todos os dispositivos;
*  **(get)** /devices/:deviceId : consulta um dispositivo; 
*  **(get)** /devices/search?modelo=? : consulta dispositivo por modelo;
*  **(post)** /devices : inclui um novo dispositivo;
*  **(put)** /devices : atualiza o dispositivo informado;
*  **(delete)** /devices/:deviceId : deleta o dispositivo
