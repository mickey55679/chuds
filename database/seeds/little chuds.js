/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
return knex("little chuds")
  .del()
  .then(function () {
    return knex("little chuds").insert([
      {
        name: "personal cheese pizza",
        price: 7,
        imgurl:
          "https://cdn.pixabay.com/photo/2019/06/18/11/59/pizza-4282169_1280.jpg", // Updated URL for visual accuracy
        category: "little chuds",
      },
      {
        name: "2pc Chicken Strips",
        price: 7,
        imgurl:
          "https://cdn.pixabay.com/photo/2018/10/05/23/24/chicken-3727097_1280.jpg",
        category: "little chuds",
      },
      {
        name: "Grilled Cheese",
        price: 7,
        imgurl:
          "https://cdn.pixabay.com/photo/2023/08/19/23/38/ai-generated-8201360_1280.png",
        category: "little chuds",
      },
    ]);
  });
};
