const knexConfig = require("../../knexfile").development;
const knex = require("knex")(knexConfig);

const getTableName = (category) => {
  const tableMap = {
    burger: "burgers",
    sandwich: "sandwiches",
    side: "sides",
    drink: "drinks",
    buildYourOwnBurger: "buildYourOwnBurger",
    littleChuds: "littleChuds",
  };
  return tableMap[category]
};

const createMenuItem = async (item) => {
  let tableName; 
  try {
    tableName = getTableName(item.category);
    const [id] = await knex(tableName).insert(item);
    console.log(`Inserted item into ${tableName} with ID: ${id}`);
    return id;
  } catch (error) {
    console.error(`Error inserting item into ${tableName}:`, error.message);
    throw error;
  }
};

const getAllMenuItems = async () => {
  try {
    const littleChuds = await knex("little chuds").select("*");
    const buildYourOwnBurger = await knex("build your own burger").select("*");
    const burgerItems = await knex("burgers").select("*");
    const sandwichItems = await knex("sandwiches").select("*");
    const sideItems = await knex("sides").select("*");
    const drinkItems = await knex("drinks").select("*");

    return {
      burgerItems,
      sandwichItems,
      sideItems,
      drinkItems,
      buildYourOwnBurger,
      littleChuds
    };
  } catch (error) {
    console.error("Error fetching menu items:", error.message);
    throw error;
  }
};



const updateMenuItem = async (id, updatedFields) => {
  const tableName = getTableName(updatedFields.category);
  await knex(tableName).where("id", id).update(updatedFields);
};

const deleteMenuItem = async (id, category) => {
  const tableName = getTableName(category);
  await knex(tableName).where("id", id).del();
};

module.exports = {
  createMenuItem,
  getAllMenuItems,
  updateMenuItem,
  deleteMenuItem,
  getTableName,
};
