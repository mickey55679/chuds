/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("options").del();

  // Inserts seed entries
  await knex("options").insert([
    { id: 1, category_id: 1, name: "Cheddar", additional_cost: 0 },
    { id: 2, category_id: 1, name: "American", additional_cost: 0 },
    { id: 3, category_id: 2, name: "Bacon", additional_cost: 1 },
    { id: 4, category_id: 2, name: "Mushrooms", additional_cost: 2 },
    { id: 5, category_id: 3, name: "Mayo", additional_cost: 0 },
    { id: 6, category_id: 3, name: "BBQ Sauce", additional_cost: 0 },
  ]);
};
