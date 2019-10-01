const knex = require("knex");

// const knex = require('knex')({
//     client: pg,
//     connection: {
//         host: 'localhost',
//         user: 'postgres',
//         password: 'password',
//         database: 'grants'
//     }
// })


const config = require("../knexfile.js");

const dbEnv = process.env.DB_ENV || "development";

// module.exports = knex

module.exports = knex(config[dbEnv]);
