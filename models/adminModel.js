const db = require("../data/db-config.js");

module.exports = {
  getReviewedGrant,
  putReviewedGrant
};

function getReviewedGrant() {
  return db("grants").where({ is_reviewed });
}

function putReviewedGrant(changes, id) {
  return db("grants")
    .where({ id })
    .update({ changes });
}
