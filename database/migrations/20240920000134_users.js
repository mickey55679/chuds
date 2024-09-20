/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", function (table) {
      table.increments("id").primary();
      table.string("username").notNullable().unique();
      table.string("password").notNullable();
      table.boolean("admin").defaultTo(false); // Admin role flag
    })
    .then(function () {
      // Any other table creations (like the 'menu' related tables) can be added here if not already migrated
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users"); // Rollback for users table
};
