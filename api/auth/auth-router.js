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
res.status(201).json({
    message:  `nice to have you ${result.username}`
})
} catch (err) {
next(err)
}


})
// post because of payload
router.post("/login", async (req, res, next) => {
try{
    const {username, password} = req.body;
    const [user] = await User.findBy({username})// search by username square brackets pull first instance of user
    console.log(user)


} catch (err){
    next(err)
}
});

router.get("/logout", async (req, res, next) => {
res.json({ message: "logout working" });
});


module.exports = router