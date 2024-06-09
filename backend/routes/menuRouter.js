const express = require("express");
const menuController = require("./menuController");

const router = express.Router();

router.post("/", menuController.createMenuItem);
router.get("/", menuController.getAllMenuItems);
router.put("/:id", async (req, res) => {
  const itemId = req.params.id;
  const updatedFields = req.body;
  try {
    await menuController.updateMenuItem(itemId, updatedFields);
    res.status(200).send("Menu item updated successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.delete("/:id/:category", async (req, res) => {
  const itemId = req.params.id;
  const category = req.params.category;
  try {
    await menuController.deleteMenuItem(itemId, category);
    res.status(200).send("Menu item deleted successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
