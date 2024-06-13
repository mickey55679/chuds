async function restricted(req, res, next) {
console.log('restricted is working')
}

// exposed
module.exports = {
    restricted,
}

