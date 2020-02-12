const knex = require('knex');

const config = require('../knexfile.js');

// This is needed for the deployed Heroku DB to function
// If the Heroku ENV isn't there, it will default to the development environment
const dbEnv = process.env.DB_ENV || 'development';

module.exports = knex(config[dbEnv]);
