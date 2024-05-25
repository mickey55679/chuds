module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./chuds1.sqlite3",
    },
    useNullAsDefault: true, // add this line
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};
