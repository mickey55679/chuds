const knexConfig = require("../../knexfile");
const knex = require("knex")(knexConfig.development);

module.exports = {
  createMenuItem: async (item) => {
    const tableName = getTableName(item.category);
    const [id] = await knex(tableName).insert(item);
    return id;
  },

  getAllMenuItems: async () => {
    const burgerItems = await knex("burgers").select("*");
    const sandwichItems = await knex("sandwiches").select("*");
    const sideItems = await knex("sides").select("*");
    const drinkItems = await knex("drinks").select("*");
    return {
      burgerItems,
      sandwichItems,
      sideItems,
      drinkItems,
    };
  },
};

function getTableName(category) {
  switch (category) {
    case "Build your own burger":
      return "burgers";
    case "Sandwiches":
      return "sandwiches";
    case "Sides":
      return "sides";
    case "Drink Items":
      return "drinks";
    default:
      throw new Error(`Unknown category: ${category}`);
  }
}
