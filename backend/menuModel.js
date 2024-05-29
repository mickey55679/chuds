// Importing the knex library, which is a SQL query builder for Node.js.
const knex = require("knex");

// Importing the development configuration from knexfile.js, which contains database connection details.
const knexConfig = require("../knexfile").development;

// Creating a new instance of knex using the development configuration.
const db = knex(knexConfig);

// Exporting an object containing two functions: createMenuItem and getAllMenuItems.
module.exports = {
  // createMenuItem is an asynchronous function that adds a new menu item to the database.
  createMenuItem: async (menuItemData) => {
    try {
      // Using knex to insert a new record into the 'menu' table with the provided menuItemData.
      // The [id] syntax is used to destructure the result array and extract the first element,
      // which is the ID of the newly inserted menu item.
      const [id] = await db("burgers").insert(menuItemData);
      // const [id] = awiat db("drinks").insert(menuItemData);

      // Returning the ID of the newly inserted menu item.
      return id;
    } catch (error) {
      // If an error occurs during the insertion, it is thrown to be caught by the caller.
      throw error;
    }
  },

  // getAllMenuItems is an asynchronous function that retrieves all menu items from the database.
  getAllMenuItems: async () => {
    try {
      // Using knex to select all records (*) from the 'menu' table.
      const burgerItems = await db("burgers").select("*");
      const drinkItems = await db("drinks").select("*")
      const sideItems = await db("sides").select("*");
      const sandwichItems = await db("sandwiches").select("*");



      // Returning the array of menu items fetched from the database.
      return {burgerItems, drinkItems, sideItems, sandwichItems}
    } catch (error) {
      // If an error occurs during the selection, it is thrown to be caught by the caller.
      throw error;
    }
  },
};
