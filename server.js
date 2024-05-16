const express = require("express");
const app = express();
const port = 3000;
const knexConfig = require("./knexfile").development;
const knex = require("knex")(knexConfig);


app.use(express.json()); // for parsing application/json

app.post("/menu", async (req, res) => {
  const { name, description, price } = req.body;
  try {
    const [id] = await knex("menu").insert({ name, description, price });
    res.status(201).send(`Menu item created with ID: ${id}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
app.get("/menu", async (req, res) => {
  try {
    const menuItems = await knex("menu").select("*");
    res.status(200).json(menuItems);
  } catch (error) {
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
