const db = require("../data/db-config.js");

module.exports = {
  getGrants,
  getGrantById,
  addGrant,
  addSuggestion
};

function getGrants() {
  return db("grants").then(grants => {
    let currentSuggestions;
    let newGrants;
    return db("requests").then(suggestions => {
      return (newGrants = grants.map(grant => {
        currentSuggestions = suggestions.filter(node => {
          console.log(node.grant_id);
          return grant.id === node.grant_id;
        });
        return { ...grant, requests: currentSuggestions };
      }));
    });
  });
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
  return db("requests")
    .insert(suggestion, "id")
    .then(ids => {
      const [id] = ids;
      return getGrantById(id);
    });
}
