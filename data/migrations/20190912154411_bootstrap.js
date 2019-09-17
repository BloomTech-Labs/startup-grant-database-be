exports.up = function(knex) {
  return knex.schema
    .createTable("grants", tbl => {
      tbl.increments();
      tbl.string("competition_name", 128);
      tbl.string("type", 128);
      tbl.string("area_focus", 128);
      tbl.string("sponsoring_entity", 128);
      tbl.string("website", 500);
      tbl.date("most_recent_application_due_date");
      tbl.integer("amount");
      tbl.string("amount_notes", 1000);
      tbl.string("geographic_region", 128);
      tbl.string("domain_areas", 1000);
      tbl.string("target_entrepreneur_demographic", 255);
      tbl.string("notes", 5000);
      tbl.boolean("early_stage_funding");
      tbl.date("details_last_updated");
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
