const knex = require("knex");
const knexConfig = require("../knexfile").development;
const db = knex(knexConfig);

module.exports = {
  createMenuItem: async (menuItemData) => {
    try {
      const [id] = await db("menu").insert(menuItemData);
      return id;
    } catch (error) {
      throw error;
    }
  },
  getAllMenuItems: async () => {
    try {
      const menuItems = await db("menu").select("*");
      return menuItems;
    } catch (error) {
      throw error;
    }
  },
};
