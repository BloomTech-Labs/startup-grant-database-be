const db = require("../data/db-config.js");

module.exports = {
  getGrants,
  getGrantsById,
  add,
  remove,
  update
};

function getGrants() {
  return db("grants");
}

function getGrantsById(id) {
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

function remove(grant) {
  return db("grants")
    .where({ id })
    .del();
}

function update(changes, id) {
  return db("grants")
    .where({ id })
    .update(changes);
}
