const db = require('../data/db-config');

class Model {
  constructor(name) {
    this.name = name;
  }

  find() {
    return db(this.name);
  }

  findAdmin() {
    return db(this.name);
  }

  findBy(filter) {
    return db(this.name).where(filter);
  }

  add(newItem) {
    return db(this.name)
      .insert(newItem)
      .returning('*');
  }

  update(id, updateItem) {
    return db(this.name)
      .where({ id })
      .update(updateItem)
      .returning('*');
  }

  remove(id) {
    return db(this.name)
      .where({ id })
      .del();
  }
}

module.exports = Model;
