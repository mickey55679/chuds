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
    useNullAsDefault: true, // add this line to avoid the warning about default values
  },
};
