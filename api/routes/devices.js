const express = require('express');
const routes = express.Router();
const mod = require('../../db-module/db.module');

routes.get('/', (req, res, next) => {
    mod.getAllDevices((data) => {
        if (!data) console.log('Error');
        res.status(200).json(data);
    });
});

routes.post('/', (req, res, next) => {
    let device = req.body;
    if (!req.body) console.log('Error');

    mod.createDevice(device, (response) => {
        res.status(201).json(response);
    });    
});

routes.get('/:deviceId', (req, res, next) => {
    let id = req.params.deviceId;

    if (!id) console.log('Error');

    mod.getDeviceById(id, (response) => {
        res.status(200).json(response);
    });
});

routes.put('/', (req, res, next) => {
    let device = req.body;    
    
    if (!req.body) console.log('Error');

    mod.updateDevice(device, (response) => {
        res.status(204).json(response);
    });
});

routes.delete('/:deviceId', (req, res, next) => {
    let id = req.params.deviceId;
    if (id <= 0) console.log('Error');

    mod.deleteDevice(id, (response) => {
        res.status(200).json(response);
    })
})

module.exports = routes;