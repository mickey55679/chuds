/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("build your own burger")
    .del()
    .then(function () {
      return knex("build your own burger").insert([
        {
          name: "lettuce",
          price: 0.99,
          imgurl:
            "https://cdn.pixabay.com/photo/2024/05/18/16/52/ai-generated-8770655_1280.png",
          category: "Build your own burger",
        },
        {
          name: "tomato",
          price: 0.99,
          imgurl:
            "https://cdn.pixabay.com/photo/2017/05/03/20/49/tomato-2282101_1280.jpg",
          category: "Build your own burger",
        },
        {
          name: "bacon",
          price: 0.99,
          imgurl:
            "https://cdn.pixabay.com/photo/2016/04/20/19/39/bacon-1341868_1280.jpg",
          category: "Build your own burger",
        },
      ]);
    });
};
