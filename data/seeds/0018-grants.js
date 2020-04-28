const modifiedUrl = require('../helpers/modifyUrl');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('grants').then(function() {
    // Inserts seed entries
    return knex('grants').insert([
      {
        competition_name: 'MIT Clean Energy Prize',
        type: 'Competition',
        area_focus: 'Clean',
        sponsoring_entity: 'MIT',
        website: 'http://cep.mit.edu/',
        most_recent_application_due_date: null,
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
      {
        competition_name: '1517 Fund',
        type: 'Competition',
        area_focus: 'Business',
        sponsoring_entity: '1517 Fund',
        website: 'http://https://www.1517fund.com/take-action',
        most_recent_application_due_date: null,
        amount: null,
        amount_notes: null,
        geographic_region: 'North America',
        domain_areas:
          'Our focus is on makers, hackers, and scientists interested in working outside tracked institutions because we believe that the path geared towards higher education is not for all.',
        target_entrepreneur_demographic: null,
        notes:
          '1517 supports teams with grant, pre-seed, and seed funding for technology startups. ',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: null,
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://https://www.1517fund.com'
        )}?size=75`,
      },
    ]);
  });
};
