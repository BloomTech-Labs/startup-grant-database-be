const db = require("../data/db-config.js");

module.exports = {
  getGrants,
  getGrantById,
  addGrant,
  addSuggestion,
  getFavorites,
  addFavorite,
  removeFavorite,
  getFavoriteByID
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

function getFavorites(authId) {
  return db("favorites") 
  .innerJoin("grants", "grants.id", "favorites.grant_id", "favorites.id")
  .select("favorites.id", "grants.*")
  .where("auth_id", "=", authId)
}

function getFavoriteByID(favoriteId) {
  return db("favorites")
    .where({ favoriteId })
    .first();
}

function addFavorite(favorite) {
  return db("favorites")
    .insert(favorite, "id")
    .then(ids => {
      const [id] = ids;
      return getFavoriteByID(id);
    })
}

function removeFavorite(favoriteId) {
  return db("favorites")
    .where({ favoriteId })
    .del();
}
