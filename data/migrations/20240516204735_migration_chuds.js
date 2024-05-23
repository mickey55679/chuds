/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
     return knex.schema.createTable("customers", function (table) {
       table.increments("id").primary(); // Primary key column, auto-increments
       table.string("name", 255).notNullable(); // Restaurant name
       table.text("address").notNullable(); // Address of the restaurant
       table.string("phone_number", 20); // Phone number, nullable
       table.timestamps(true, true); // `created_at` and `updated_at` columns
     });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTable("customers");
};
