require('dotenv').config();
const mysql = require('mysql');
const sql = require('./../constants/sql.constants');
const confDB = require('../db-config/config.db');

const _getConnection = () => {
    return mysql.createConnection(confDB.configDB);
}

/**
 * Consulta todos os dispositivos cadastrados. 
 */
const _getDevices = (callback) => {
    let conn = _getConnection();
    conn.query(sql.queryAllDevices, (error, results, fields) => {
        callback(results);
    });
    conn.end();
};

/**
 * Consulta devide por ID
 */
const _getDeviceById = (id, callback) => {
    let conn = _getConnection();
    let deviceId = id > 0 ? id : 0;
    conn.query(sql.queryDeviceById, [deviceId], (error, results, fields) => {
        callback(results);
    });
    conn.end();
};

/**
 * 
 * @param {*} device 
 * Inclui um novo dispositivo no banco de dados
 */
const _createDevice = (device, callback) => {
    let conn = _getConnection();
    let response = {};

    conn.query(sql.createDevice,
        [device.device_modelo, device.device_fabricante, device.device_capacidade_armazenamento,
        device.device_tamanho_tela, device.device_versao_so],
        (error, results, fields) => {
            if (error) console.log(error);
            
            response = {
                status: 201,
                message: `Usuário incluído com sucesso.`
            }
            callback(response);
        });
    conn.end();
};

/**
 * @param {*} device
 * Atualiza um device
 */
const _updateDevice = (device, callback) => {
    let conn = _getConnection();
    let response = {};
    conn.query(sql.updateDevice,
        [device.device_modelo,
        device.device_fabricante,
        device.device_capacidade_armazenamento,
        device.device_tamanho_tela,
        device.device_versao_so,
        device.device_id],
        (error, results, fields) => {
            if (results.affectedRows === 1) {
                response = {
                    status: 200,
                    message: `Usuário alterado com sucesso.`
                }
            } else {
                response = {
                    status: 500,
                    message: `Server internal error`
                }
            }
            callback(response);
        });
    conn.end();
};

/**
 * 
 * @param {*} id 
 * permite a exlcusão de um device
 */
const _deleteDevice = (id, callback) => {
    let conn = _getConnection();
    let response = {};
    conn.query(sql.deleteDevice, id, (error, results, fields) => {
        if (error) throw error;
        if (results.affectedRows === 1) {
            response = {
                status: 200,
                message: `Usuário excluído com sucesso`
            }
        } else {
            response = {
                status: 500,
                message: `Something went wrong`
            }
        }
        callback(response);
    });
    conn.end();
};

module.exports = {
    getAllDevices: _getDevices,
    getDeviceById: _getDeviceById,
    createDevice: _createDevice,
    updateDevice: _updateDevice,
    deleteDevice: _deleteDevice
}