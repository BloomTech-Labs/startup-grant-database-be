exports.up = function(knex) {
  return knex.schema.createTable('favorites', tbl => {
    tbl.increments();

    tbl
      .integer('grant_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('grants')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    tbl.string('auth_id', 200).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('favorites');
};
