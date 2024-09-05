exports.seed = function (knex) {
  return knex("users")
    .where({ username: "admin" })
    .first()
    .then((existingUser) => {
      if (!existingUser) {
        return knex("users").insert({
          username: "admin",
          password:
            "$2a$08$CjOzAqkUXePlNyZCG6TKuubIY.MpjKqOdrV/W3178ah483kyEbeSe",
        });
      }
    });
};
