const db = require("../data/db-config.js");

module.exports = {
  getUser,
  getUserBy,
  getUserById,
  // getUserByAuthId,
  addUser,
  // removeUser,
  // updateUser,
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
    .select('id', 'email')
    .first();
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

// function removeUser(id) {
//   return db('users')
//     .where('id', Number(id))
//     .del()
// }

// function updateUser(id, user) {
//   return db('users')
//     .where('id', Number(id))
//     .update(user)
// }