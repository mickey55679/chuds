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
          imgurl: "http://example.com/club_sandwich.jpg",
        },
        {
          id: 2,
          sandwich_name: "Turkey Sandwich",
          price: 7.49,
          imgurl: "http://example.com/turkey_sandwich.jpg",
        },
        {
          id: 3,
          sandwich_name: "Ham Sandwich",
          price: 7.99,
          imgurl: "http://example.com/ham_sandwich.jpg",
        },
      ]);
    });
};
