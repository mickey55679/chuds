module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/chuds1.sqlite3",
    },
    useNullAsDefault: true, // add this line
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
};
