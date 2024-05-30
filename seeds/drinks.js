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
          imgurl:
            "https://cdn.pixabay.com/photo/2019/11/06/01/40/coca-cola-4604990_1280.jpg",
        },
        {
          id: 2,
          drink_name: "Lemonade",
          price: 2.49,
          imgurl:
            "https://cdn.pixabay.com/photo/2019/11/06/01/40/coca-cola-4604990_1280.jpg",
        },
        {
          id: 3,
          drink_name: "Iced Tea",
          price: 2.49,
          imgurl:
            "https://cdn.pixabay.com/photo/2017/05/19/07/34/teacup-2325722_1280.jpg",
        },
      ]);
    });
};
