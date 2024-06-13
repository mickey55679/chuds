const jwt = require("jsonwebtoken");
const knexConfig = require("../../knexfile").development;
const knex = require("knex")(knexConfig);

function restrictToAdmin(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token" });
      }

      try {
        const user = await knex("users")
          .where({ id: decodedToken.subject })
          .first();
        if (!user || !user.isAdmin) {
          return res.status(403).json({ message: "Unauthorized" });
        }
        req.user = user;
        next();
      } catch (error) {
        console.error("Error verifying user:", error);
        return res.status(500).json({ error: "Server error" });
      }
    });
  } else {
    return res.status(401).json({ message: "Token required" });
  }
}

module.exports = {
  restrictToAdmin,
};
