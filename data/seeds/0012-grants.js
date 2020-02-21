const modifiedUrl = require('../helpers/modifyUrl');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('grants').then(function() {
    // Inserts seed entries
    return knex('grants').insert([
      {
        competition_name: 'Global Social Venture Competition',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'Berkeley Haas',
        website: 'http://gsvc.org/apply/',
        most_recent_application_due_date: '12/4/2017',
        amount: 80000,
        amount_notes: null,
        geographic_region: 'North America',
        country: 'United States',
        domain_areas:
          'Financially sustainable or profitable, scalable long term, social and/or environmental bottom line,',
        target_entrepreneur_demographic: null,
        notes:
          'Empower the next generation of social entrepreneurs by providing them with mentoring, exposure, and prize money to transform their ideas into fundable, scalable ventures that address the world’s most pressing challenges.',
        early_stage_funding: false,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://gsvc.org/apply/'
        )}?size=75`,
      },
      {
        competition_name:
          'Global Competition for Hardware-Led Social Innovations',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'ISHOW',
        website: 'http://cep.mit.edu/',
        most_recent_application_due_date: '3/15/2017',
        amount: 50000,
        amount_notes: null,
        geographic_region: 'Global',
        domain_areas:
          'Seeking sustainable and scalable hardware-based solutions and technologies that can have a transformational economic, environmental and social impact in underserved communities around the world. The global competition invites the best and brightest engineers, entrepreneurs, students, and innovators to enter their prototype solutions that focus on energy, health, agriculture, clean water, and sanitation.',
        target_entrepreneur_demographic: null,
        notes:
          'Designers are invited to enter one of three ISHOW competitions in Bangalore, India; Nairobi, Kenya, and Washington, D.C - 3 winners at each ISHOW can win up to $50,000.',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://cep.mit.edu/'
        )}?size=75`,
      },
    ]);
  });
};
