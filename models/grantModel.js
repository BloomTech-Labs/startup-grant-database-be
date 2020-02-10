const db = require("../data/db-config.js");

// Favorite models is being held here as well as general grant models

module.exports = {
  getGrants,
  getGrantById,
  addGrant,
  addSuggestion,
  getFavorites,
  addFavorite,
  removeFavorite,
  getFavoriteByID,
  removeSuggestion,
  fetchSuggestions,
  getSuggestionById
};

function getGrants() {
  return db("grants").where({ is_reviewed: true })
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

function removeSuggestion(suggestion_id) {
  return db('requests')
    .where("id", "=", suggestion_id )
    .del()
}


function fetchSuggestions(grant_id) {
  return db('requests')
    .where('grant_id', "=", grant_id)
  	
}

function getSuggestionById(id) {
  return db("requests")
    .where({ id })
    .first();
}


// ========== Favorites Models ==========

// favorites will only be returned if they have been reviewed
function getFavorites(id) {
  return db("favorites") 
    .innerJoin("grants", "grants.id", "favorites.grant_id")
    .select("grants.*", "favorites.id as favoriteID")
    .where("id", "=", id)
    .andWhere({ is_reviewed: true })
}

function getFavoriteByID(favoriteId) {
  return db("favorites")
    .where("id", "=", favoriteId )
    .first();
  }

function addFavorite(favorite) {
  return db("favorites")
    .insert(favorite, "id")
    .then(ids => {
      const [id] = ids;
      return getFavorites(favorite.auth_id);
    })
}

function removeFavorite(favoriteId) {
  return db("favorites")
    .where("id", "=", favoriteId )
    .del();
}
