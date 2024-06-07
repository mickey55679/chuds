const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const menuRouter = require("./backend/routes/menuRouter");
const knex = require("knex")(knexConfig);
const knexConfig = require("./knexfile").development;

const { expressjwt: jwt } = require("express-jwt"); // Corrected import
const jwksRsa = require("jwks-rsa");

// Middleware for JWT validation
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  issuer: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/`,
  algorithms: ["RS256"],
});


// Middleware to check user roles
const checkRole = (role) => (req, res, next) => {
  const roles = req.user["https://chuds.com/roles"];
  console.log('Roles:', roles);  // Add this line
  if (roles && roles.includes(role)) {
    next();
  } else {
    res.status(403).send("Access denied");
  }
};

app.use(express.json()); // for parsing application/json
app.use(cors());

// Protect routes with JWT middleware
app.use("/menu", menuRouter);
app.use("/menu/admin", checkJwt, checkRole('admin'), menuRouter);  // Admin specific routes

app.use((req, res, next) => {
  console.log("User object:", req.user);
  next();
});


app.post("/menu",  async (req, res) => {
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
app.get("/", (req, res) => {
  res.send("Welcome to the Food Ordering System!");
});

// Protect admin routes with JWT and role check middleware
app.get("/api/admins", checkJwt, checkRole("admin"), async (req, res) => {
  const admins = await knex("admins").select("*");
  res.json(admins);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
