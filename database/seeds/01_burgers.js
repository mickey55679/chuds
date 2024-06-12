/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("burgers").del();

  // Inserts seed entries
  await knex("burgers").insert([
    {
      id: 11,
      name: "Classic Burger",
      price: 8.99,
      imgurl:
        "https://cdn.pixabay.com/photo/2021/01/06/10/11/burger-5893927_1280.jpg",
      category: "Build your own burger",
    },
    {
      id: 12,
      name: "Cheese Burger",
      price: 9.99,
      imgurl:
        "https://cdn.pixabay.com/photo/2023/10/08/13/03/ai-generated-8302143_1280.jpg",
      category: "Build your own burger",
    },
    {
      id: 13,
      name: "Vegan Burger",
      price: 10.99,
      imgurl:
        "https://cdn.pixabay.com/photo/2023/05/29/17/01/hamburger-8026582_1280.jpg",
      category: "Build your own burger",
    },
  ]);

  // Repeat for other tables (sandwiches, sides, drinks) as needed
};
