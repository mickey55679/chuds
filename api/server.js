const express = require("express");
const cors = require("cors");
require("dotenv").config();

const menuRouter = require("./menu/menuRouter");
const usersRouter = require("./users/users-router"); 

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());


// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the Food Ordering System!");
});

// Use menuRouter for routes starting with /menu
app.use("/menu", menuRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
