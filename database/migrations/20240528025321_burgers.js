/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("burgers", function (table) {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.decimal("price").notNullable();
      table.string("imgurl").notNullable();
      table.string("category").notNullable(); // Added category column
    })
    .then(function () {
      return knex.schema.createTable("sandwiches", function (table) {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.decimal("price").notNullable();
        table.string("imgurl").notNullable();
        table.string("category").notNullable(); // Added category column
      });
    })
    .then(function () {
      return knex.schema.createTable("sides", function (table) {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.decimal("price").notNullable();
        table.string("imgurl").notNullable();
        table.string("category").notNullable(); // Added category column
      });
    })
    .then(function () {
      return knex.schema.createTable("drinks", function (table) {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.decimal("price").notNullable();
        table.string("imgurl").notNullable();
        table.string("category").notNullable(); // Added category column
      });
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("drinks")
    .then(function () {
      return knex.schema.dropTableIfExists("sides");
    })
    .then(function () {
      return knex.schema.dropTableIfExists("sandwiches");
    })
    .then(function () {
      return knex.schema.dropTableIfExists("burgers");
    });
};
