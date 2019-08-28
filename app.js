const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const devicesRoutes = require('./api/routes/devices');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.use(cors());

app.use('/devices', devicesRoutes);

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
})

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error,req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;