/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("menu").del();

  // Inserts seed entries
  await knex("menu").insert([
    {
      id: 1,
      name: "Build Your Own Burger",
      description:
        "Comes on a toasted ciabatta roll includes lettuce, tomato, onion, and pickle.",
      category: "Burgers",
      price: 12.0,
      image_url:
        "https://cdn.pixabay.com/photo/2021/01/19/08/47/sandwich-5930496_1280.jpg", // URL included here
    },
    // Add more menu items as needed
  ]);
};
