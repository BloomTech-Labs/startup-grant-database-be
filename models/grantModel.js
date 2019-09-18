const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  add,
  update,
  remove
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
}

function update(changes, id) {
  return db("grants")
    .where({ id })
    .update(changes);
  // .then(id1 => findById(id));
}

function remove(grant) {
  return db("grants")
    .where({ id })
    .del();
}
