/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("burgers", function (table) {
    table.increments("id").primary();
    table.string("burger_name").notNullable();
    table.decimal("price").notNullable();
    table.string("imgurl").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("burgers");
};
