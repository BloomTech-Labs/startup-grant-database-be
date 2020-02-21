exports.up = function(knex) {
  return knex.schema.table('grants', tbl => {
    tbl.string('logo', 255).defaultTo(null);
    tbl.boolean('use_logo').defaultTo(null);
  });
};

exports.down = function(knex) {};
