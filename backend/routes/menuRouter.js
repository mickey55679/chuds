
const express = require("express");

const menuController = require("./menuController");


const router = express.Router();

router.post("/", menuController.createMenuItem);
router.get("/", menuController.getAllMenuItems); 


module.exports = router;
