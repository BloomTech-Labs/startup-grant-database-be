const db = require('../data/db-config');
const BaseModel = require('./base.model');

class GrantsModel extends BaseModel {
  find() {
    return db(this.name).where({ is_reviewed: true });
  }
}

module.exports = new GrantsModel('grants');
