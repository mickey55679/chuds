exports.up = function (knex) {
  return knex.schema
    .createTable("menu", function (table) {
      table.increments("id").primary();
      table.string("name", 255).notNullable();
      table.text("description");
      table.string("category");
      table.boolean("special").defaultTo(false);
      table.decimal("price", 9, 2).notNullable();
      table.string("image_url");
      table.timestamps(true, true);
    })
    .createTable("option_categories", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
    })
    .createTable("options", (table) => {
      table.increments("id").primary();
      table
        .integer("category_id")
        .unsigned()
        .references("id")
        .inTable("option_categories");
      table.string("name").notNullable();
      table.decimal("additional_cost", 9, 2).defaultTo(0);
    })
    .createTable("menu_options", (table) => {
      table.integer("menu_id").unsigned().references("id").inTable("menu");
      table.integer("option_id").unsigned().references("id").inTable("options");
      table.primary(["menu_id", "option_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("menu_options")
    .dropTableIfExists("options")
    .dropTableIfExists("option_categories")
    .dropTableIfExists("menu");
};
