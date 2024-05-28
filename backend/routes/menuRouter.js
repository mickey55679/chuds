// Importing the Express framework to create a router.
const express = require("express");

// Importing the menuController module, which contains functions for handling menu-related requests.
const menuController = require("./menuController");

// Creating a new router instance using Express.
const router = express.Router();

// Defining routes for creating a new menu item and getting all menu items.
router.post("/", menuController.createMenuItem); // POST route to create a new menu item.
router.get("/", menuController.getAllMenuItems); // GET route to fetch all menu items.

// Exporting the router so it can be used by other parts of the application.
module.exports = router;
