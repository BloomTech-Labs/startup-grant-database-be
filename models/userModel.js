const db = require("../data/db-config.js");

module.exports = {
  getUser,
  getUserBy,
  getUserById,
  addUser
};

function addUser(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return getUserById(id);
    });
}

function getUser() {
  return db("users");
}

function getUserBy(filter) {
  return db("users").where(filter);
}

function getUserById(id) {
  return db("users")
    .where({ id })
    .first();
}
