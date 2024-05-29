/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("drinks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("drinks").insert([
        {
          id: 1,
          drink_name: "Coke",
          price: 1.99,
          imgurl: "http://example.com/coke.jpg",
        },
        {
          id: 2,
          drink_name: "Lemonade",
          price: 2.49,
          imgurl: "http://example.com/lemonade.jpg",
        },
        {
          id: 3,
          drink_name: "Iced Tea",
          price: 2.49,
          imgurl: "http://example.com/iced_tea.jpg",
        },
      ]);
    });
};
