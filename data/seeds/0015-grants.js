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
        // domain_areas: 'clean energy/impact',
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
        competition_name: 'J.M.K. Innovation Prize',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'J.M. Kaplan Fund',
        website: 'http://www.jmkfund.org/',
        most_recent_application_due_date: '4/28/2017',
        amount: 175000,
        amount_notes: '$175,000 (for each of the 10 winners)',
        geographic_region: 'United States',
        domain_areas:
          'Cultural heritage, human rights, the built environment, the natural environment',
        target_entrepreneur_demographic: null,
        notes: '--',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://www.jmkfund.org/'
        )}?size=75`,
      },
      {
        competition_name: 'Lipman Family Prize',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'University of Pennsylvania',
        website: 'https://lipmanfamilyprize.wharton.upenn.edu/',
        most_recent_application_due_date: '8/14/2017',
        amount: 250000,
        amount_notes:
          '$250,000 for winning organization and $25,000 for each of other two finalists',
        geographic_region: 'Global',
        domain_areas: 'Education',
        target_entrepreneur_demographic: null,
        notes:
          'Median organizational budget of $1.5M and median organizational age of 10 years',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'https://lipmanfamilyprize.wharton.upenn.edu/'
        )}?size=75`,
      },
      {
        competition_name: 'March Open Challenge',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'GlobalGiving',
        website: 'https://www.globalgiving.org/open-challenge-nomination/',
        most_recent_application_due_date: '1/31/2016',
        amount: 5000,
        amount_notes: 'At least $5,000',
        geographic_region: 'Global',
        domain_areas: 'N/A',
        target_entrepreneur_demographic: null,
        notes:
          "Additional bonus prizes available for organizations that raise the most funds using GlobalGiving's platform. they accept applications at any time and your application is valid for 2 years",
        early_stage_funding: false,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'https://www.globalgiving.org/open-challenge-nomination/'
        )}?size=75`,
      },
      {
        competition_name: 'Milken-Penn GSE Education Business Plan Competition',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'University of Pennsylvania School of Education',
        website: 'http://www.educationcompetition.org/',
        most_recent_application_due_date: '9/12/2017',
        amount: 25000,
        amount_notes: 'Venture Prize: $25,000\n Idea Prize: $15,000',
        geographic_region: 'Global',
        domain_areas: 'Urban education, technology',
        target_entrepreneur_demographic: null,
        notes: null,
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://www.educationcompetition.org/'
        )}?size=75`,
      },
      {
        competition_name: 'MIT Clean Energy Prize',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'Massachusetts Institute of Technology',
        website: 'http://cep.mit.edu/',
        most_recent_application_due_date: '2/17/2017',
        amount: 100000,
        amount_notes:
          '$100,000 Grand Prize, $75,000 DOE EERE Clean Energy Prize, and three $35,000 Track Prizes',
        geographic_region: 'Global',
        domain_areas:
          'Energy efficiency, renewable energy, infrastructure & resources',
        target_entrepreneur_demographic: null,
        notes:
          'At least two people; at least one team member must be a U.S. citizen',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://cep.mit.edu/'
        )}?size=75`,
      },
      {
        competition_name: 'Morgan Stanley Sustainable Investing Challenge',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity:
          'Northwestern University, Kellogg School of Management',
        website: 'http://sustainableinvestingchallenge.org/',
        most_recent_application_due_date: '2/15/2017',
        amount: 10000,
        amount_notes: '1st place: $10,000\n Runner-up: $5,000',
        geographic_region: 'Global',
        domain_areas:
          'Finance, investment; environmental or societal challenges',
        target_entrepreneur_demographic: null,
        notes: 'For graduate students only; maximum 4 people on a team',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://sustainableinvestingchallenge.org/'
        )}?size=75`,
      },
    ]);
  });
};
