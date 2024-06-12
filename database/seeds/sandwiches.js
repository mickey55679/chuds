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
          id: 31,
          name: "Patty Melt",
          price: 13.0,
          imgurl:
            "https://cdn.pixabay.com/photo/2015/10/13/21/05/sandwich-986784_1280.jpg",
          category: "Classic",
        },
        {
          id: 32,
          name: "Philly Cheesesteak",
          price: 13.0,
          imgurl:
            "https://cdn.pixabay.com/photo/2015/10/13/21/05/sandwich-986784_1280.jpg",
          category: "Beef",
        },
        {
          id: 33,
          name: "Crispy Chicken Club",
          price: 13.0,
          imgurl:
            "https://cdn.pixabay.com/photo/2015/10/13/21/05/sandwich-986784_1280.jpg",
          category: "Chicken",
        },
        {
          id: 34,
          name: "Sweet Chili Chicken'N'Slaw",
          price: 13.0,
          imgurl:
            "https://cdn.pixabay.com/photo/2015/10/13/21/05/sandwich-986784_1280.jpg",
          category: "Spicy",
        },
        {
          id: 35,
          name: "Tomato Basil Grilled Chicken",
          price: 13.0,
          imgurl:
            "https://cdn.pixabay.com/photo/2015/10/13/21/05/sandwich-986784_1280.jpg",
          category: "Chicken",
        },
        {
          id: 36,
          name: "Sloppy BBQ Pulled Pork",
          price: 13.0,
          imgurl:
            "https://cdn.pixabay.com/photo/2015/10/13/21/05/sandwich-986784_1280.jpg",
          category: "Pork",
        },
        {
          id: 37,
          name: "Grilled Pesto Chicken Cheesesteak",
          price: 13.0,
          imgurl:
            "https://cdn.pixabay.com/photo/2015/10/13/21/05/sandwich-986784_1280.jpg",
          category: "Chicken",
        },
        {
          id: 38,
          name: "Crabby Chicken",
          price: 13.0,
          imgurl:
            "https://cdn.pixabay.com/photo/2015/10/13/21/05/sandwich-986784_1280.jpg",
          category: "Seafood",
        },
        {
          id: 39,
          name: "Slawsome CHUDS Burger",
          price: 16.0,
          imgurl:
            "https://cdn.pixabay.com/photo/2015/10/13/21/05/sandwich-986784_1280.jpg",
          category: "Special",
        },
      ]);
    });
};
