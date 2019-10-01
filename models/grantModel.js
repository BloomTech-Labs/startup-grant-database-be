const db = require("../data/db-config.js");

module.exports = {
  getGrant,
  getGrantById,
  addGrant,
  updateGrant,
  removeGrant
};

function getGrant() {
  return db("grants");
}

function getGrantById(id) {
  return db("grants")
    .where({ id })
    .first();
}

function addGrant(grant) {
  return db("grants")
    .insert(grant, "id")
    .then(ids => {
      const [id] = ids;
      return getGrantById(id);
    });
}

function updateGrant(changes, id) {
  return db("grants")
    .where({ id })
    .updateGrant(changes);
}

function removeGrant(id) {
  return db("grants")
    .where({ id })
    .del();
}
