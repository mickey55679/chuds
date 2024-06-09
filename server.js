const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const menuRouter = require("./backend/routes/menuRouter");
const knexConfig = require("./knexfile").development;
const knex = require("knex")(knexConfig);
require("dotenv").config();
const menuModel = require('./backend/routes/menuModel')

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const secretKey = process.env.JWT_SECRET_KEY; 

// User registration
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    await knex("users").insert({ email, password: hashedPassword });
    res.status(201).send("User registered");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// User login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await knex("users").where({ email }).first();
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send("Invalid credentials");
    }
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Admin registration
app.post("/register-admin", async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    await knex("admins").insert({ email, password: hashedPassword });
    res.status(201).send("Admin registered");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Admin login
app.post("/login-admin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await knex("admins").where({ email }).first();
    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      return res.status(401).send("Invalid credentials");
    }
    const token = jwt.sign({ adminId: admin.id, role: "admin" }, secretKey, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).send("Access denied");

  jwt.verify(token.split(" ")[1], secretKey, (err, user) => {
    if (err) return res.status(403).send("Invalid token");
    req.user = user;
    next();
  });
};

// Middleware to authenticate admin
const authenticateAdmin = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).send("Access denied");

  jwt.verify(token.split(" ")[1], secretKey, (err, admin) => {
    if (err || admin.role !== "admin")
      return res.status(403).send("Invalid token or access denied");
    req.user = admin;
    next();
  });
};


// Public route to view menu
app.get("/menu", async (req, res) => {
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
app.post("/menu", authenticateAdmin, async (req, res) => {
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

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the Food Ordering System!");
});

// Admin specific routes
app.use("/menu/admin", authenticateAdmin, menuRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

