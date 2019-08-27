require('dotenv').config();

const http = require('http');
const app = require('./app');

const port = process.env.PORT_SERVER || 5000;

const server = http.createServer(app);

server.listen(port);