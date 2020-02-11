// ---- Local Postgres DB configuration ----
//
// If you set up a local database, you will need
// to put in the correct credentials here:
//
require('dotenv').config();

const localPg = {
  host: process.env.DB_HOST,
  database:
    process.env.DB_ENV === 'development'
      ? process.env.DB_NAME
      : process.env.DB_TEST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
};

const dbConnection = process.env.DATABASE_URL || localPg;

const dbObj = {
  client: 'pg',
  connection: dbConnection,
  migrations: {
    directory: `${__dirname}/data/migrations`,
  },
  seeds: {
    directory: `${__dirname}/data/seeds`,
  },
  pool: {
    min: 2,
    max: 10,
  },
};

// The different DB environment setups
module.exports = {
  development: {
    ...dbObj,
  },
  testing: {
    ...dbObj,
  },
  production: {
    ...dbObj,
  },
};
