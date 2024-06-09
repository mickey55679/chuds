// migrations/<timestamp>_create_admins_table.js

exports.up = function (knex) {
  return knex.schema.createTable("admins", function (table) {
    table.increments("id").primary();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("admins");
};
