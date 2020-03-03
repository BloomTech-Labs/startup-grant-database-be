exports.up = function(knex) {
  return knex.schema.createTable('grants', tbl => {
    tbl.increments(); // Keep
    tbl.string('competition_name', 500); // Keep
    // tbl.string("type", 255);
    tbl.string('area_focus', 255); // Keep
    tbl.string('sponsoring_entity', 255); // Keep
    tbl.string('website', 500); // Keep
    tbl.string('most_recent_application_due_date'); // Keep
    tbl.integer('amount'); // Keep
    tbl.string('amount_notes', 1000); // Keep
    tbl.string('geographic_region', 255); // Keep
    tbl.string('country');
    // tbl.string("domain_areas", 1000);
    tbl.string('target_entrepreneur_demographic', 255); // Keep
    tbl.string('notes', 5000); // KeepOptions for --register-aws

    tbl.boolean('early_stage_funding'); // Keep
    tbl.boolean('is_reviewed'); // Keep
    tbl.boolean('has_requests'); // Keep
    tbl.string('details_last_updated'); // Keep
    tbl.string('domain_areas', 500);
    tbl.string('type');
    tbl.string('logo', 255).defaultTo(null);
    tbl.boolean('use_logo').defaultTo(null);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('grants');
};
