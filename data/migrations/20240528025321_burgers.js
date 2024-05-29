/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("burgers", function (table) {
      table.increments("id").primary();
      table.string("burger_name").notNullable();
      table.decimal("price").notNullable();
      table.string("imgurl").notNullable();
    })
    .then(function () {
      return knex.schema.createTable("sandwiches", function (table) {
        table.increments("id").primary();
        table.string("sandwich_name").notNullable();
        table.decimal("price").notNullable();
        table.string("imgurl").notNullable();
      });
    })
    .then(function () {
      return knex.schema.createTable("sides", function (table) {
        table.increments("id").primary();
        table.string("side_name").notNullable();
        table.decimal("price").notNullable();
        table.string("imgurl").notNullable();
      });
    })
    .then(function () {
      return knex.schema.createTable("drinks", function (table) {
        table.increments("id").primary();
        table.string("drink_name").notNullable();
        table.decimal("price").notNullable();
        table.string("imgurl").notNullable();
      });
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("sides")
    .then(function () {
      return knex.schema.dropTableIfExists("sandwiches");
    })
    .then(function () {
      return knex.schema.dropTableIfExists("burgers");
    });
};
