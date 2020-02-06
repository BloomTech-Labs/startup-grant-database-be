exports.up = function (knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.string('email').notNullable().unique();
        tbl.string('first_name');
        tbl.string('last_name');
        tbl.string('role');
        tbl.string('phone');
        tbl.string('company');
        tbl.string('company_url');
        tbl.string('about');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users');
};
