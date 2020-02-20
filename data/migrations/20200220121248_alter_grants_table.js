exports.up = function(knex) {
  return knex.schema.table('grants', tbl => {
    tbl.string('logo', 255).defaultTo(null);
  });
};

exports.down = function(knex) {};
