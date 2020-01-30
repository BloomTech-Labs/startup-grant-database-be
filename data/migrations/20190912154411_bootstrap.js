exports.up = function(knex) {
  return knex.schema
    .createTable("grants", tbl => {
      tbl.increments(); //Keep
      tbl.string("competition_name", 500); //Keep
      // tbl.string("type", 255);
      tbl.string("area_focus", 255); //Keep
      tbl.string("sponsoring_entity", 255); //Keep
      tbl.string("website", 500); //Keep
      tbl.date("most_recent_application_due_date"); //Keep
      tbl.integer("amount"); //Keep
      tbl.string("amount_notes", 1000); //Keep
      tbl.string("geographic_region", 255); //Keep
      // tbl.string("domain_areas", 1000); 
      tbl.string("target_entrepreneur_demographic", 255); //Keep
      tbl.string("notes", 5000); //Keep
      tbl.boolean("early_stage_funding"); //Keep
      tbl.boolean("is_reviewed"); //Keep
      tbl.boolean("has_requests"); //Keep
      tbl.date("details_last_updated"); //Keep
      tbl.string("domain_areas");
      tbl.string("type");
    })
    .createTable("requests", tbl => {
      tbl.increments();
      tbl.string("subject", 255);
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
      // token row
      tbl.increments();
      tbl
        .string('email', 128)
        .notNullable()
        .unique()
      
      tbl.string("role").defaultTo("user").notNullable();
      tbl.string("first_name", 128)
      tbl.string("last_name", 128)
      tbl.string("phone_number", 128)
      tbl.string("country", 128)
      tbl.string("state", 128)
      tbl.string("city", 128)
      tbl.string("street", 128)
      tbl.string("apartment", 128)
      tbl.string("postal", 128)

    })
    .createTable("favorites", tbl => {
      // many to many (grants - users)
      tbl
        .integer('email_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

      tbl.integer("grant_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("grants")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
        tbl.primary(['email_id', 'grant_id'])
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("requests")
    .dropTableIfExists("grants")
    .dropTableIfExists("favorites");
};