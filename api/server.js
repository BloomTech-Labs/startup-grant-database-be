const express = require('express');
const middleware = require('./middleware/server.middleware');
const routes = require('./routes/routes.index');

const server = express();
middleware(server);
routes(server);

module.exports = server;
