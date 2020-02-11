exports.up = function(knex) {
  return knex.schema.createTable('requests', tbl => {
    tbl.increments();
    tbl.string('subject', 255);
    tbl.string('suggestion', 1000);
    tbl
      .integer('grant_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('grants')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('requests');
};
