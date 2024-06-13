const express = require('express')

const router = express.Router()
// register is a post request because we need to provide credentials 
router.post('/register', async (req, res, next) => {
 res.json({message: 'register is working'})
})
// login requires credentials as well so it needs to be a post as well
router.post("/login", async (req, res, next) => {
res.json({message: 'login working'})
});
// get request for logout because no payload is required
router.get("/logout", async (req, res, next) => {
res.json({ message: "logout working" });
});


module.exports = router