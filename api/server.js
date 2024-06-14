const express = require("express");
const cors = require("cors");
const session = require('express-session')
require("dotenv").config();


const menuRouter = require("./menu/menuRouter");
const usersRouter = require("./users/users-router"); 
const authRouter = require('./auth/auth-router')
const db = require("../database/db-config");


const server = express();
const port = process.env.PORT || 3000;

server.use(express.json());
server.use(cors());
server.use(session({
  
}))

// Home route
// server.get("/", (req, res) => {
//   res.send("Welcome to the Food Ordering System!");
// });

// Use menuRouter for routes starting with /menu
server.use("/api/menu", menuRouter); 
server.use("/api/users", usersRouter);
server.use('/api/auth', authRouter)

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
