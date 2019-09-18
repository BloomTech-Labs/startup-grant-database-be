const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  add,
  remove,
  update
};

function find() {
  return db("grants");
}

function findById(id) {
  return db("grants")
    .where({ id })
    .first();
}

function add(grant) {
  return db("grants")
    .insert(grant, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
  // return db("grants").insert(grant);
}

function update(changes, id) {
  return db("grants")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("grants")
    .where({ id })
    .del();
}
