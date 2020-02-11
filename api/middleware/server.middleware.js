const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

module.exports = server =>
  server.use([
    helmet(),
    express.json(),
    express.urlencoded({ extended: true }),
    cors(),
    morgan('dev'),
  ]);
