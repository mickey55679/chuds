const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()

// post because of payload
router.post('/register', async (req, res, next) => {
const {username, password} = req.body;
const hash = bcrypt.hashSync(password, 8)
console.log(hash)

})
// post because of payload
router.post("/login", async (req, res, next) => {
res.json({message: 'login working'})
});

router.get("/logout", async (req, res, next) => {
res.json({ message: "logout working" });
});


module.exports = router