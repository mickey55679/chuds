
const menuModel = require("./menuModel");

module.exports = {
  // createMenuItem is an asynchronous function that adds a new menu item to the database.
  createMenuItem: async (req, res) => {
    const { name, description, price, category, special } = req.body;

    try {
      const id = await menuModel.createMenuItem({
        name,
        description,
        price,
        category,
        special,
      });
      res.status(201).send(`Menu item created with ID: ${id}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  getAllMenuItems: async (req, res) => {
    try {
      const menuItems = await menuModel.getAllMenuItems();
      res.status(200).json(menuItems);
    } catch (error) {
      console.error("Error fetching menu items:", error);
      res.status(500).send(error.message);
    }
  },
};
