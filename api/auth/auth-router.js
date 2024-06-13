const express = require('express')

const router = express.Router()
// post because of payload
router.post('/register', async (req, res, next) => {
 res.json({message: 'register is working'})
})
// post because of payload
router.post("/login", async (req, res, next) => {
res.json({message: 'login working'})
});

router.get("/logout", async (req, res, next) => {
res.json({ message: "logout working" });
});


module.exports = router