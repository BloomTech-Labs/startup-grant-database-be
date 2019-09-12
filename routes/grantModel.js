const db = require("../data/db-config.js");

module.exports = {
  getGrants,
  getGrantsById
};

function getGrants() {
  return db("grants");
}

function getGrantsById(id) {
  return db("grants")
    .where({ id })
    .first();
}
