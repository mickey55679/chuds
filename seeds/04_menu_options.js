/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("menu_options").del();

  // Inserts seed entries
  await knex("menu_options").insert([
    { menu_id: 1, option_id: 1 },
    { menu_id: 1, option_id: 2 },
    { menu_id: 1, option_id: 3 },
    { menu_id: 1, option_id: 4 },
    // Add more as necessary
  ]);
};
