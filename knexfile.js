module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./chuds1.sqlite3",
    },

    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};
