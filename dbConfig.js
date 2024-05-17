module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./chuds.sqlite3",
    },
    migrations: {
      directory: "./migrations",
    },
  },
};
