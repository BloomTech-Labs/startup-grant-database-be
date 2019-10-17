// Update with your config settings.
const localPg = {
  host: "localhost",
  database: "postgres",
  user: "postgres",
  password: "password"
};

const dbConnection = process.env.DATABASE_URL || localPg;

module.exports = {
  development: {
    client: "pg",
    connection: dbConnection,
    migrations: {
      directory: __dirname + "/data/migrations"
    },
    seeds: {
      directory: __dirname + "/data/seeds"
    }
    // client: "sqlite3",
    // useNullAsDefault: true,
    // connection: {
    //   filename: "./data/grants.db3"
    // },
    // pool: {
    //   afterCreate: (conn, done) => {
    //     conn.run("PRAGMA foreign_keys = ON", done);
    //   }
    // },
    // migrations: {
    //   directory: "./data/migrations"
    // },
    // seeds: {
    //   directory: "./data/seeds"
    // }
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
