const db = require("../data/db-config.js");

module.exports = {
  getGrant,
  getGrantById,
  addGrant,
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

