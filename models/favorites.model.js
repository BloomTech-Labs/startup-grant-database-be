const db = require('../data/db-config');
const BaseModel = require('./base.model');

class FavoritesModel extends BaseModel {
  find() {
    return db(this.name)
      .innerJoin('grants', 'grants.id', 'favorites.grant_id')
      .select('grants.*', 'favorites.id as favoriteID')
      .where({ is_reviewed: true });
  }
}

module.exports = new FavoritesModel('favorites');
