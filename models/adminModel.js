const db = require("../data/db-config.js");

module.exports = {
  getGrantsAdmin,
  updateGrant,
  removeGrant,
  removeSuggestion,
  getSuggestions
  // getPendingGrants,
  // putPendingGrants,
};

function getGrantsAdmin() {
  return db("grants").then(grants => {
    let currentSuggestions;
    let newGrants;
    return db("requests").then(suggestions => {
      return (newGrants = grants.map(grant => {
        currentSuggestions = suggestions.filter(node => {
          // console.log(node.grant_id);
          return grant.id === node.grant_id;
        });
        return { ...grant, requests: currentSuggestions };
      }));
    });
  });
}

function getSuggestions() {
  return db('requests')
}

function updateGrant(changes, id) {
  return db("grants")
    .where({ id })
    .update(changes);
}

function removeGrant(id) {
  return db("grants")
    .where({ id })
    .del();
}

function removeSuggestion(id) {
  return db("requests")
    .where({ id })
    .del();
}

// function getPendingGrants() {
//   return db("grants").where({ is_reviewed });
// }

// function putPendingGrants(changes, id) {
//   return db("grants")
//     .where({ id })
//     .update({ changes });
// }
