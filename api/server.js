const express = require("express");
const cors = require("cors");
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);
require("dotenv").config();

const menuRouter = require("./menu/menuRouter");
const usersRouter = require("./users/users-router");
const authRouter = require("./auth/auth-router");

const server = express();

server.use(express.json());
server.use(
  cors({
    origin: "http://localhost:3001", // Update with your frontend URL
    credentials: true, // Allow credentials (cookies, sessions)
  })
);
server.use(
  session({
    name: "sadie",
    secret: process.env.SESSION_SECRET || "this is a secret",
    cookie: {
      maxAge: 1000 * 60 * 60,
      secure: false,
      httpOnly: false,
    },
    rolling: true,
    resave: false,
    saveUninitialized: false,
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
server.use("/api/auth", authRouter);

module.exports = server;
