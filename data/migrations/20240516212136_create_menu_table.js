/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("menu", function (table) {
      table.increments("id").primary();
      table.string("name", 255).notNullable();
      table.text("description");
       table.string("category");
       table.boolean("special").defaultTo(false);
      table.decimal("price", 9, 2).notNullable();
      table.string("image_url");
      table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.table("menu", function (table) {
    table.dropColumn("category");
    table.dropColumn("special");
  });
};

