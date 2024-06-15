const express = require("express");
const cors = require("cors");
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);
require("dotenv").config();


const menuRouter = require("./menu/menuRouter");
const usersRouter = require("./users/users-router"); 
const authRouter = require('./auth/auth-router')
const db = require("../database/db-config");



const server = express();
const port = process.env.PORT || 3000;

server.use(express.json());
server.use(cors());
server.use(
  session({
    name: "sadie",
    secret: process.env.SESSION_SECRET || "this is a secret",
    cookie: {
      maxAge: 1000 * 60 * 60,
      secure: false, // if true the cookie would only work over https, not http which is what is used for now
      httpOnly: false, // weather javascript can read or not, can at false
    },
    rolling: true, //fresh cookie with every login
    resave: false,
    saveUninitialized: false, // we cant be setting cookies on any client that makes req, only successful login
    store: new KnexSessionStore({
      knex: require("../database/db-config"),
      tablename: "sessions",
      sidfieldname: "sid",
      createtable: true,
      clearInterval: 1000 * 60 * 60,
    }),
  })
);



server.use("/api/menu", menuRouter); 
server.use("/api/users", usersRouter);
server.use('/api/auth', authRouter)

// Error handling middleware
server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ message: err.message });
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
