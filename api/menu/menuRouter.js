const express = require("express");
const knexConfig = require("../../knexfile").development;
const knex = require("knex")(knexConfig);
const menuModel = require("./menuModel");
const { restricted, onlyAdmin } = require("../auth/auth-middleware");

const router = express.Router();

// Public route to view menu
router.get("/", async (req, res) => {
  try {
    const burgerItems = await knex("burgers").select("*");
    const sandwichItems = await knex("sandwiches").select("*");
    const sideItems = await knex("sides").select("*");
    const drinkItems = await knex("drinks").select("*");

    const menuItems = {
      burgerItems,
      sandwichItems,
      sideItems,
      drinkItems,
    };

    res.status(200).json(menuItems);
  } catch (error) {
    console.error("Error fetching menu items:", error.message);
    res
      .status(500)
      .json({ error: `Error fetching menu items: ${error.message}` });
  }
});

// Protected routes for admins to modify the menu
router.post("/", restricted, onlyAdmin, async (req, res) => {
  const { name, price, imgurl, category } = req.body;
  try {
    const tableName = menuModel(category);
    const [id] = await knex(tableName).insert({
      name,
      price,
      imgurl,
      category,
    });
    res.status(201).send(`Menu item created with ID: ${id}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/:id", restricted, onlyAdmin, async (req, res) => {
  const itemId = req.params.id;
  const updatedFields = req.body;
  try {
    await menuModel.updateMenuItem(itemId, updatedFields);
    res.status(200).send("Menu item updated successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/:id/:category", restricted, onlyAdmin, async (req, res) => {
  const itemId = req.params.id;
  const category = req.params.category;
  try {
    await menuModel.deleteMenuItem(itemId, category);
    res.status(200).send("Menu item deleted successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
