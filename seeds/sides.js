/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("sides")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("sides").insert([
        {
          id: 41,
          name: "Fries",
          price: 2.99,
          imgurl:
            "https://cdn.pixabay.com/photo/2020/06/23/14/33/french-fries-5332766_1280.jpg",
        },
        {
          id: 42,
          name: "Onion Rings",
          price: 3.49,
          imgurl:
            "https://cdn.pixabay.com/photo/2020/06/23/14/33/french-fries-5332766_1280.jpg",
        },
        {
          id: 43,
          name: "Salad",
          price: 3.99,
          imgurl:
            "https://cdn.pixabay.com/photo/2020/06/23/14/33/french-fries-5332766_1280.jpg",
        },
      ]);
    });
};
