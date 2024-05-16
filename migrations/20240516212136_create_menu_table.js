/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("menu", function (table) {
      table.increments("id").primary();
      table.string("name", 255).notNullable();
      table.text("description");
      table.decimal("price", 9, 2).notNullable();
      table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
      return knex.schema.dropTable("menu");
  
};
