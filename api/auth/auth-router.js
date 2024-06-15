const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const User = require('../users/users-model')

// post because of payload
router.post('/register', async (req, res, next) => {
  try {
    const { username, password, admin } = req.body;  // Add `admin` field to request body
    const hash = bcrypt.hashSync(password, 8);
    const newUser = { username, password: hash, admin: admin || false };
    const result = await User.add(newUser);
    res.status(201).json({
      message: `Nice to have you ${result.username}`
    });
  } catch (err) {
    next(err);
  }
})
// post because of payload
router.post("/login", async (req, res, next) => {
try{
    const {username, password} = req.body;
    const [user] = await User.findBy({username})// search by username square brackets pull first instance of user
    if(user && bcrypt.compareSync(password, user.password) ){
     req.session.user = user // trigger setting cookie and server will remmember 
     res.json({message: `welcome back! ${user.username}`, isAdmin: user.admin})
    } else {
        next({status: 401, message: 'bad credentials'})
    }


} catch (err){
    next(err)
}
});

router.get("/logout", async (req, res, next) => {
if(req.session.user){
  const {username} = req.session.user 
  req.session.destroy(err => {
    if(err){
      res.json({message: `you can never leave, ${username}`})
    } else {
      res.json({message: `Goodbye ${username}`})
    }
  }
  )
} else {
  res.set('Set-Cookie', 'sadie=; SameSite=Strict; Path=/; Expires=Thu, 01 Jan 1970 00:00:00')
  res.json({message: 'sorry, have we met?'})
}
});


module.exports = router