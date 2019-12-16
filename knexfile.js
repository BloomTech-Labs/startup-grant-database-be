// ---- Local Postgres DB configuration ----
//
// If you set up a local database, you will need
// to put in the correct credentials here:
//
const localPg = {
  host: "localhost",
  database: "postgres",
  user: "postgres",
  password: "password123"
};

const dbConnection = process.env.DATABASE_URL || localPg;

// The different DB environment setups
module.exports = {
  
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/db-config.db3"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
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
  }
};
