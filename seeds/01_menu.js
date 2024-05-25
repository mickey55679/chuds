/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("menu")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("menu").insert([
        {
          id: 1,
          name: "Pizza",
          description: "Delicious cheese pizza",
          category: "Main Course",
          special: false,
          price: 10.99,
        },
        {
          id: 2,
          name: "Burger",
          description: "Juicy beef burger",
          category: "Main Course",
          special: true,
          price: 8.99,
        },
        {
          id: 3,
          name: "Ice Cream",
          description: "Vanilla ice cream",
          category: "Dessert",
          special: false,
          price: 3.99,
        },
      ]);
    });
};
