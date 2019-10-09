exports.up = function(knex) {
  return knex.schema
    .createTable("grants", tbl => {
      tbl.increments();
      tbl.string("competition_name", 255);
      tbl.string("type", 255);
      tbl.string("area_focus", 255);
      tbl.string("sponsoring_entity", 255);
      tbl.string("website", 500);
      tbl.date("most_recent_application_due_date");
      tbl.integer("amount");
      tbl.string("amount_notes", 1000);
      tbl.string("geographic_region", 255);
      tbl.string("domain_areas", 1000);
      tbl.string("target_entrepreneur_demographic", 255);
      tbl.string("notes", 5000);
      tbl.boolean("early_stage_funding");
      tbl.boolean("is_reviewed");
      tbl.boolean("has_requests");
      tbl.date("details_last_updated");
    })
    .createTable("requests", tbl => {
      tbl.increments();
      tbl.string('subject', 255)
      tbl.string("suggestion", 1000);
      tbl
        .integer("grant_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("grants")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("users", tbl => {
      tbl.increments();
      tbl.string("role").defaultTo("user");
      tbl.string("auth_id", 200);
    });
  // .createTable("user_roles", tbl => {
  //   tbl.increments();
  //   tbl.string("role", 128).defaultTo("user");
  // })
  // .createTable("user_roles_info", tbl => {
  //   tbl.increments();
  //   tbl
  //     .integer("user_id")
  //     .unsigned()
  //     .notNullable()
  //     .references("id")
  //     .inTable("users")
  //     .onDelete("CASCADE")
  //     .onUpdate("CASCADE");
  //   tbl
  //     .integer("user_role_id")
  //     .unsigned()
  //     .notNullable()
  //     .references("id")
  //     .inTable("user_roles")
  //     .onDelete("CASCADE")
  //     .onUpdate("CASCADE");
  // });
};

exports.down = function(knex) {
  return (
    knex.schema
      // .dropTableIfExists("user_roles_info")
      // .dropTableIfExists("user_roles")
      .dropTableIfExists("users")
      .dropTableIfExists("requests")
      .dropTableIfExists("grants")
  );
};
