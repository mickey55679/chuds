// Importing the menuModel, which includes functions to interact with the database for menu items.
const menuModel = require("./menuModel");

// Exporting an object that contains two functions: createMenuItem and getAllMenuItems.
module.exports = {
  // createMenuItem is an asynchronous function that adds a new menu item to the database.
  createMenuItem: async (req, res) => {
    // Destructuring to extract data from the request body that is sent by the client.
    const { name, description, price, category, special } = req.body;

    try {
      // Calling the createMenuItem function from menuModel to add a new item to the database.
      // This function presumably returns the ID of the newly created menu item.
      const id = await menuModel.createMenuItem({
        name,
        description,
        price,
        category,
        special,
      });

      // If the item is successfully created, send back a 201 status code (Created)
      // along with a message including the ID of the newly created item.
      res.status(201).send(`Menu item created with ID: ${id}`);
    } catch (error) {
      // If an error occurs during the creation of the menu item, log the error and send
      // a 500 status code (Internal Server Error) with the error message.
      res.status(500).send(error.message);
    }
  },

  // getAllMenuItems is an asynchronous function that retrieves all menu items from the database.
  getAllMenuItems: async (req, res) => {
    try {
      // Calling the getAllMenuItems function from menuModel to fetch all the menu items.
      // This function presumably returns an array of all the items.
      const menuItems = await menuModel.getAllMenuItems();

      // If the items are successfully fetched, send back a 200 status code (OK)
      // along with the data in JSON format.
      res.status(200).json(menuItems);
    } catch (error) {
      // If an error occurs while fetching the menu items, log the error and send
      // a 500 status code (Internal Server Error) with the error message.
      console.error("Error fetching menu items:", error);
      res.status(500).send(error.message);
    }
  },
};
