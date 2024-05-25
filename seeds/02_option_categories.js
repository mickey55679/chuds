/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("option_categories").del();

  // Inserts seed entries
  await knex("option_categories").insert([
    { id: 1, name: "Cheese" },
    { id: 2, name: "Toppings" },
    { id: 3, name: "Sauces" },
  ]);
};
