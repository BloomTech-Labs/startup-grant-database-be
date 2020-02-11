const db = require('../data/db-config.js');
const BaseModel = require('./base.model');

class UsersModel extends BaseModel {}

module.exports = new UsersModel('users');
