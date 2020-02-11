const express = require('express');
const middleware = require('./middleware/server.middleware');
const routes = require('./routes/routes.index');

const server = express();
middleware(server);
routes(server);

/**
 * All 500 Errors are piped through this middleware.  This should be called 0 times with
 * proper error handling on the routes.
 */
server.use((error, req, res) => {
  console.error(error);
  res.status(500).json({ message: 'An Error Has Occurred', error });
});

module.exports = server;
