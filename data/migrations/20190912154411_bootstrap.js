exports.up = function(knex) {
  return knex.schema
    .createTable("grants", tbl => {
      tbl.increments();
      tbl.text("competition_name");
      tbl.text("type");
      tbl.text("area_focus");
      tbl.text("sponsoring_entity");
      tbl.text("website");
      tbl.text("most_recent_application_due_date");
      tbl.text("amount");
      tbl.text("geographic_region");
      tbl.text("domain_areas");
      tbl.text("target_entrepreneur_demographic");
      tbl.text("notes");
      tbl.text("early_stage_funding");
      tbl.text("details_last_updated");
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
