require('dotenv').config();

const schema = process.env.DATABASE;
const table = process.env.TABLE;
const deviceId = 'device_id';
const deviceModelo = 'device_modelo';
const deviceFabricante = 'device_fabricante';
const deviceCapacidadeArm = 'device_capacidade_armazenamento';
const deviceTamanhoTela = 'device_tamanho_tela';
const deviceVersaoSO = 'device_versao_so';

const _queryAllDevices = `SELECT * FROM ${schema}.${table}`;

const _queryDeviceById = `SELECT * FROM ${schema}.${table} WHERE ${table}.${deviceId} = ?`;

const _createDevice = `
    INSERT INTO ${table} (
        ${deviceModelo}, ${deviceFabricante}, ${deviceCapacidadeArm}, ${deviceTamanhoTela}, ${deviceVersaoSO}) VALUES ( ?, ?, ?, ?, ? )`;

const _updateDevice = `
    UPDATE ${table} SET
    ${deviceModelo} = ?,
    ${deviceFabricante} = ?,
    ${deviceCapacidadeArm} = ?,
    ${deviceTamanhoTela} = ?,
    ${deviceVersaoSO} = ?
    WHERE ${deviceId} = ?`;

const _deleteDevice = `DELETE FROM ${schema}.${table} WHERE ${table}.${deviceId} = ?`;

const _queryByModelo = `SELECT * FROM ${schema}.${table} WHERE ${deviceModelo} LIKE CONCAT('%', ? , '%')`;

module.exports = {
    queryAllDevices: _queryAllDevices,
    queryDeviceById: _queryDeviceById,
    createDevice: _createDevice,
    updateDevice: _updateDevice,
    deleteDevice: _deleteDevice,
    queryByModelo: _queryByModelo
}