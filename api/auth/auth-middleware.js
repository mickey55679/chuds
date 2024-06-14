async function restricted(req, res, next) {
console.log('restricted is working')
}
async function validatePayload(req, res, next){
    console.log('validate payload is working')
}

// exposed
module.exports = {
    restricted,
    validatePayload
}

