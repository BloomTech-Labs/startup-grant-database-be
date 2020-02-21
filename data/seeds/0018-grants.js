const modifiedUrl = require('../helpers/modifyUrl');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('grants').then(function() {
    // Inserts seed entries
    return knex('grants').insert([
      {
        competition_name: 'MIT Clean Energy Prize',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'MIT',
        website: 'http://cep.mit.edu/',
        most_recent_application_due_date: '4/5/2019',
        amount: 100000,
        amount_notes:
          'Prize amounts are determined\nby the discretion of the Clean\nEnergy Prize Managing\nDirectors (grand prize last year\nwas $100,000)',
        geographic_region: 'Global',
        domain_areas: 'clean energy/impact',
        target_entrepreneur_demographic: 'university teams',
        notes:
          'Teams that have received\nexcess of $100,000 before the\nentry deadline are not elligible\nto enter',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '6/11/2019',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://cep.mit.edu/'
        )}?size=75`,
      },
    ]);
  });
};
