// Middleware to restrict routes based on user roles
function restricted(req, res, next) {
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

function onlyAdmin(req, res, next) {
  if (req.session && req.session.user && req.session.user.admin) {
    next();
  } else {
    res.status(403).json({ message: "Admins only" });
  }
}

module.exports = {
  restricted,
  onlyAdmin,
};
