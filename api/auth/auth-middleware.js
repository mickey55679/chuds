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

// exposed
module.exports = {
    restricted,
    validatePayload
}

