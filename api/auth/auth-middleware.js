async function restricted(req, res, next) {
if(req.session.user) {
    next()
} else {
    next({message: 'You shall not pass!'})
}
}
async function validatePayload(req, res, next){
    console.log('validate payload is working')
}

 function onlyAdmin(req, res, next) {
   if (req.session && req.session.user && req.session.user.admin) {
     next();
   } else {
     res
       .status(403)
       .json({ message: "You do not have the necessary permissions." });
   }
 }

// exposed
module.exports = {
    restricted,
    validatePayload,
    onlyAdmin,
}

