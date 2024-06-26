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
          id: 21,
          name: "Coke",
          price: 1.99,
          imgurl:
            "https://cdn.pixabay.com/photo/2019/11/06/01/40/coca-cola-4604990_1280.jpg",
          category: "Soda",
        },
        {
          id: 22,
          name: "Lemonade",
          price: 2.49,
          imgurl:
            "https://cdn.pixabay.com/photo/2016/07/30/12/15/lemonade-1555950_1280.jpg", // Updated URL for visual accuracy
          category: "Juice",
        },
        {
          id: 23,
          name: "Iced Tea",
          price: 2.49,
          imgurl:
            "https://cdn.pixabay.com/photo/2017/05/19/07/34/teacup-2325722_1280.jpg",
          category: "Tea",
        },
      ]);
    });
};
