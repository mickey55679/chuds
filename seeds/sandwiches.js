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
          sandwich_name: "Patty Melt",
          price: 13.0,
          imgurl:
            "https://cdn.pixabay.com/photo/2015/10/13/21/05/sandwich-986784_1280.jpg",
        },
        {
          id: 2,
          sandwich_name: "Philly Cheesesteak",
          price: 13.0,
          imgurl:
            "https://cdn.pixabay.com/photo/2015/10/13/21/05/sandwich-986784_1280.jpg",
        },
        {
          id: 3,
          sandwich_name: "Crispy Chicken Club",
          price: 13.0,
          imgurl:
            "https://cdn.pixabay.com/photo/2015/10/13/21/05/sandwich-986784_1280.jpg",
        },
        {
          id: 4,
          sandwich_name: "Sweet Chili Chicken'N'Slaw",
          price: 13.0,
          imgurl:
            "https://cdn.pixabay.com/photo/2015/10/13/21/05/sandwich-986784_1280.jpg",
        },
        {
          id: 5,
          sandwich_name: "Tomato Basil Grilled Chicken",
          price: 13.0,
          imgurl:
            "https://cdn.pixabay.com/photo/2015/10/13/21/05/sandwich-986784_1280.jpg",
        },
        {
          id: 6,
          sandwich_name: "Sloppy BBQ Pulled Pork",
          price: 13.0,
          imgurl:
            "https://cdn.pixabay.com/photo/2015/10/13/21/05/sandwich-986784_1280.jpg",
        },
        {
          id: 7,
          sandwich_name: "Grilled Pesto Chicken Cheesesteak",
          price: 13.0,
          imgurl:
            "https://cdn.pixabay.com/photo/2015/10/13/21/05/sandwich-986784_1280.jpg",
        },
        {
          id: 8,
          sandwich_name: "Crabby Chicken",
          price: 13.0,
          imgurl:
            "https://cdn.pixabay.com/photo/2015/10/13/21/05/sandwich-986784_1280.jpg",
        },
        {
          id: 9,
          sandwich_name: "Slawsome CHUDS Burger",
          price: 16.0,
          imgurl:
            "https://cdn.pixabay.com/photo/2015/10/13/21/05/sandwich-986784_1280.jpg",
        },
      ]);
    });
};
