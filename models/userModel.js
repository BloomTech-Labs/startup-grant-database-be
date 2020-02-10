const db = require("../data/db-config.js");

module.exports = {
  getUsers,
  getUserBy,
  getUserById,
  // getUserByAuthId,
  getUserByEmail,
  addUser,
  removeUser,
  updateUser
};

function addUser(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return getUserById(id);
    });
}

function getUserById(id) {
  return db("users")
    .where({ id })
    .select("id", "email")
    .first();
}

function getUsers() {
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

function getUserByEmail(id) {
  return db("users")
    .where(id, "=", "email")
    .first();
}
function removeUser(email) {
  return db("users")
    .where("id", "=", email)
    .del();
}

function updateUser(id, user) {
  return db("users")
    .where("email", "=", id)
    .update(user);
}
