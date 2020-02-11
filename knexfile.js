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

const testingObj = {
  client: 'sqlite3',
  connection: {
    filename: './data/grantlytest.db3'
  },
  migrations: {
    directory: `${__dirname}/data/migrations`,
  },
  seeds: {
    directory: `${__dirname}/data/seeds`,
  },
  pool: {
    afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done)
  },
  useNullAsDefault: true
}

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
    ...testingObj,
  },
  production: {
    ...dbObj,
  },
};
