/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return knex("burgers")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("burgers").insert([
        {
        
          name: "Classic Burger",
          price: 8.99,
          imgurl:
            "https://cdn.pixabay.com/photo/2021/01/06/10/11/burger-5893927_1280.jpg",
          category: "Build your own burger",
        },
        {
      
          name: "Cheese Burger",
          price: 9.99,
          imgurl:
            "https://cdn.pixabay.com/photo/2023/10/08/13/03/ai-generated-8302143_1280.jpg",
          category: "Build your own burger",
        },
        {
     
          name: "Vegan Burger",
          price: 10.99,
          imgurl:
            "https://cdn.pixabay.com/photo/2023/05/29/17/01/hamburger-8026582_1280.jpg",
          category: "Build your own burger",
        },
      ]);
    });
};
