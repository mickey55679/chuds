const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const User = require('../users/users-model')

// post because of payload
router.post('/register', async (req, res, next) => {
try{
const {username, password} = req.body;
const hash = bcrypt.hashSync(password, 8)
const newUser = {username, password: hash}
const result = await User.add(newUser)
} catch (err) {
    

}


})
// post because of payload
router.post("/login", async (req, res, next) => {
res.json({message: 'login working'})
});

router.get("/logout", async (req, res, next) => {
res.json({ message: "logout working" });
});


module.exports = router