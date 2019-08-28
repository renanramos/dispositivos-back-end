const express = require('express');
const routes = express.Router();
const mod = require('../../db-module/db.module');

routes.get('/', (req, res, next) => {
    mod.getAllDevices((data) => {
        res.status(200).json(data);
    });
});

routes.get('/search', (req, res, next) => {
    let search = req.query ? req.query : '';
    
    mod.getDeviceByModelo(search.modelo,(data) => {        
        res.status(200).json(data);
    })
    
})

routes.post('/', (req, res, next) => {
    let device = req.body;

    mod.createDevice(device, (response) => {
        res.status(201).json(response);
    });    
});

routes.get('/:deviceId', (req, res, next) => {
    let id = req.params.deviceId;

    mod.getDeviceById(id, (response) => {
        res.status(200).json(response);
    });
});

routes.put('/', (req, res, next) => {
    let device = req.body;        

    mod.updateDevice(device, (response) => {
        res.status(201).json(response);
    });
});

routes.delete('/:deviceId', (req, res, next) => {
    let id = req.params.deviceId;

    mod.deleteDevice(id, (response) => {
        res.status(200).json(response);
    })
})

module.exports = routes;