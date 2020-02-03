// ---- Local Postgres DB configuration ----
//
// If you set up a local database, you will need
// to put in the correct credentials here:
//
require('dotenv').config();

const localPg = {
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
};

const dbConnection = process.env.DATABASE_URL || localPg;

// The different DB environment setups
module.exports = {
  
  development: {
    client: "sqlite3",
    connection: {
      filename: './data/grantly.db3',
    },
    migrations: {
      directory: __dirname + "/data/migrations"
    },
    seeds: {
      directory: __dirname + "/data/seeds"
    },
    useNullAsDefault: true,
  },

  production: {
    client: "pg",
    connection: dbConnection,
    migrations: {
      directory: __dirname + "/data/migrations"
    },
    seeds: {
      directory: __dirname + "/data/seeds"
    }
  },
  testing: {
    client: "pg",
    connection: dbConnection,
    migrations: {
      directory: __dirname + "/data/migrations"
    },
    seeds: {
      directory: __dirname + "/data/seeds"
    }
  },
  pgDevelopment: {
    client: 'pg',
    connection: dbConnection,
    migrations: {
      directory: __dirname + "/data/migrations"
    },
    seeds: {
      directory: __dirname + "/data/seeds"
    },
    pool: {
      min: 2,
      max: 10
    }
  }
};
