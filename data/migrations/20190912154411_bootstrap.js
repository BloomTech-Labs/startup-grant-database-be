exports.up = function(knex) {
  return knex.schema
    .createTable("grants", tbl => {
      tbl.increments();
      tbl.string("competition_name");
      tbl.string("type");
      tbl.string("area_focus");
      tbl.string("sponsoring_entity");
      tbl.string("website");
      tbl.string("most_recent_application_due_date");
      tbl.string("amount");
      tbl.string("geographic_region");
      tbl.string("domain_areas");
      tbl.string("target_entrepreneur_demographic");
      tbl.string("notes");
      tbl.string("early_stage_funding");
      tbl.string("details_last_updated");
    })
    .createTable("users", tbl => {
      tbl.increments();
      tbl
        .string("username", 128)
        .notNullable()
        .unique();
      tbl.string("password", 128).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("grants");
};
