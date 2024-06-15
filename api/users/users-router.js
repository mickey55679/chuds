const router = require("express").Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const Users = require("./users-model");
const {restricted} = require('../auth/auth-middleware')


router.get("/", restricted, (req, res, next) => {
  Users.find()
    .then((users) => {
      res.json(users);
    })
    .catch(next); // our custom err handling middleware will trap this
});

module.exports = router;
