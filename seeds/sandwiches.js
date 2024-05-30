/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("sandwiches")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("sandwiches").insert([
        {
          id: 1,
          sandwich_name: "Club Sandwich",
          price: 6.99,
          imgurl:
            "https://cdn.pixabay.com/photo/2015/10/13/21/05/sandwich-986784_1280.jpg",
        },
        {
          id: 2,
          sandwich_name: "Turkey Sandwich",
          price: 7.49,
          imgurl:
            "https://cdn.pixabay.com/photo/2015/10/13/21/05/sandwich-986784_1280.jpg",
        },
        {
          id: 3,
          sandwich_name: "Ham Sandwich",
          price: 7.99,
          imgurl:
            "https://cdn.pixabay.com/photo/2015/10/13/21/05/sandwich-986784_1280.jpg",
        },
      ]);
    });
};
