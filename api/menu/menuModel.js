const knexConfig = require("../knexfile").development;
const knex = require("knex")(knexConfig);

const getTableName = (category) => {
  const tableMap = {
    burger: "burgers",
    sandwich: "sandwiches",
    side: "sides",
    drink: "drinks",
  };
  return tableMap[category];
};

const createMenuItem = async (item) => {
  const tableName = getTableName(item.category);
  const [id] = await knex(tableName).insert(item);
  return id;
};

const getAllMenuItems = async () => {
  const burgerItems = await knex("burgers").select("*");
  const sandwichItems = await knex("sandwiches").select("*");
  const sideItems = await knex("sides").select("*");
  const drinkItems = await knex("drinks").select("*");

  return { burgerItems, sandwichItems, sideItems, drinkItems };
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
};
