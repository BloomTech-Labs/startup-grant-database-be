const db = require('../data/db-config');
const BaseModel = require('./base.model');

class SuggestionModel extends BaseModel {
  find(grant_id) {
    return db(this.name).where('grant_id', '=', grant_id);
  }
}

module.exports = new SuggestionModel('requests');
