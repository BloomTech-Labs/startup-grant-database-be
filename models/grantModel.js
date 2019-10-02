const db = require("../data/db-config.js");

module.exports = {
  getGrant,
  getGrantById,
  addGrant,
  addSuggestion,
  removeSuggestion
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

function addSuggestion(suggestion) {
  return db("grants")
    .insert(suggestion, "id")
    .then(ids => {
      const [id] = ids;
      return getGrantById(id);
    });
}

function removeSuggestion(id) {
  return db('grants').where({ id }).del()
}
