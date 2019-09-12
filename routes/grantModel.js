const db = require("../data/db-config.js");

module.exports = {
  getGrants
};

function getGrants() {
  return db("grants");
}
