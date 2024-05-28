const express = require("express");
const app = express();
const port = 3000;
const knexConfig = require("./knexfile").development;
const knex = require("knex")(knexConfig);
const cors = require("cors");
const menuRouter = require("./backend/routes/menuRouter");


app.use(express.json()); // for parsing application/json
app.use(cors());

app.use("/menu", menuRouter);

app.post("/menu", async (req, res) => {
  const { name, description, price, category, special } = req.body;
  try {
    const [id] = await knex("menu").insert({
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
});
app.get("/menu", async (req, res) => {
  try {
    const menuItems = await knex("menu").select("*");
    console.log("Menu items:", menuItems); // log the menu items
    res.status(200).json(menuItems);
  } catch (error) {
      console.error("Error fetching menu items:", error); 
    res.status(500).send(error.message);
  }
});


// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Food Ordering System!');
});

// Add other routes as needed


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
