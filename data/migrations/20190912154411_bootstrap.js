exports.up = function(knex) {
  return knex.schema.createTable("grants", tbl => {
    tbl.increments();
    tbl.string("competition_name");
    tbl.string("type");
    tbl.string("area_focus");
    tbl.string("sponsoring_entity");
    tbl.string("website");
    tbl.date("most_recent_application_due_date");
    tbl.integer("amount");
    tbl.string("geographic_region");
    tbl.string("domain_area");
    tbl.string("target_entrepreneur_demographic");
    tbl.string("notes");
    tbl.boolean("early_stage_funding");
    tbl.date("details_last_updated");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("grants");
};
