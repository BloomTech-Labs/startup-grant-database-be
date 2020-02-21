const modifiedUrl = require('../helpers/modifyUrl');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('grants').then(function() {
    // Inserts seed entries
    return knex('grants').insert([
      {
        competition_name: 'GIST Tech-I Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'Global Innovation Through Science and Technology',
        website: 'http://www.gistnetwork.org/content/gist-tech-i',
        most_recent_application_due_date: null,
        amount: 15000,
        amount_notes:
          '$15,000 along with trip to compete in the live pitching finals at the Global Entrepreneurship Summit; grants and mentoring',
        geographic_region: 'Global',
        target_entrepreneur_demographic: null,
        notes:
          'Idea can be an invention, product, service, app, or any combination, or something unique',
        early_stage_funding: false,
        is_reviewed: false,
        has_requests: true,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://www.gistnetwork.org/content/gist-tech-i'
        )}?size=75`,
      },
      {
        competition_name: 'Africa Angels Network Award',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'Harambe Entrepreneur Alliance',
        website: 'http://www.healliance.org/africa_angels_network_award.pdf',
        most_recent_application_due_date: '12/30/2015',
        amount: 10000,
        amount_notes: null,
        geographic_region: 'Africa',
        target_entrepreneur_demographic: null,
        notes:
          'For young entrepreneurial Africans; preference given to female-led ventures',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: true,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://www.healliance.org/africa_angels_network_award.pdf'
        )}?size=75`,
      },
      {
        competition_name: 'Alaska Airlines Environmental Challenge',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'Alaska Airlines',
        website:
          'http://foster.uw.edu/centers/buerk-ctr-entrepreneurship/entrepreneurship-competitions/eic/',
        most_recent_application_due_date: '12/19/2016',
        amount: 15000,
        amount_notes:
          '$15,000 Grand Prize\n $10,000 2nd Place\n $5,000 Clean Energy\n $2,500 Honorable Mentions',
        geographic_region: 'North America',
        country: 'United States',
        target_entrepreneur_demographic: null,
        notes:
          'One team member must be a student of a college or university in Washington, Alaska, Wyoming, Idaho, or Montana',
        early_stage_funding: false,
        is_reviewed: true,
        has_requests: true,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://foster.uw.edu/centers/buerk-ctr-entrepreneurship/entrepreneurship-competitions/eic/'
        )}?size=75`,
      },
      {
        competition_name: 'APTE Impact IdeaPitch Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'Alleviating Poverty Through Entrepreneurship',
        website: 'http://www.aptesummit.org/bizcomp-judges/',
        most_recent_application_due_date: '3/15/2017',
        amount: 1000,
        amount_notes: '$1000 in prizes; $500 attendee favorite prize',
        geographic_region: 'Global',
        target_entrepreneur_demographic: null,
        notes: 'Applicants must be available for the Summit in Spring',
        early_stage_funding: false,
        is_reviewed: true,
        has_requests: true,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://www.aptesummit.org/bizcomp-judges/'
        )}?size=75`,
      },
      {
        competition_name: 'ARPA-E: Open Funding Opportunity Announcement',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'ARPA-E',
        website:
          'https://arpa-e-foa.energy.gov/#FoaIdce3cc85c-75cb-4d73-baa5-3cee39bb6bc7',
        most_recent_application_due_date: null,
        amount: 10000000,
        amount_notes: '$1M-$10M',
        geographic_region: 'Global',
        target_entrepreneur_demographic: null,
        notes: 'N/A',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'https://arpa-e-foa.energy.gov/#FoaIdce3cc85c-75cb-4d73-baa5-3cee39bb6bc7'
        )}?size=75`,
      },
      {
        competition_name: 'AT&T Experts: Grant for Greatness',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'AT&T Experts',
        website: 'http://www.attexperts.com/grant',
        most_recent_application_due_date: '9/15/2016',
        amount: 1000,
        amount_notes: null,
        geographic_region: 'North America',
        country: 'United States',
        target_entrepreneur_demographic: null,
        notes:
          'Innovative ideas from individuals, small businesses, startups, think tanks, anyone with a great plan or idea. Package your idea into a 2-minute video.',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://www.attexperts.com/grant'
        )}?size=75`,
      },
      {
        competition_name: 'BASES Challenge 2017',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity:
          'Business Association of Stanford Entrepreneurial Students',
        website: 'http://bases.stanford.edu/programs/',
        most_recent_application_due_date: '2/12/2016',
        amount: 100000,
        amount_notes: null,
        geographic_region: 'Global',
        target_entrepreneur_demographic: null,
        notes:
          'At least one Stanford student (graduate or undergraduate) or alumnus must be on the team to compete',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://bases.stanford.edu/programs/'
        )}?size=75`,
      },
      {
        competition_name: 'Big Ideas @ Berkeley',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'University of California, Berkeley',
        website: 'http://bigideas.berkeley.edu/',
        most_recent_application_due_date: '11/15/2017',
        amount: 5000,
        amount_notes: '$5,000-$10,000',
        geographic_region: 'North America',
        country: 'United States',
        target_entrepreneur_demographic: null,
        notes:
          'At least one member of each team must be a matriculated student at an eligible campus to enter the contest',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://bigideas.berkeley.edu/'
        )}?size=75`,
      },
      {
        competition_name: 'Business for Good',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'Nashville Social Enterprise Alliance',
        website: 'http://nashvillesocialenterprise.org/business-for-good/',
        most_recent_application_due_date: '1/1/2014',
        amount: 10000,
        amount_notes: null,
        geographic_region: 'North America',
        country: 'United States',
        target_entrepreneur_demographic: null,
        notes: null,
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://nashvillesocialenterprise.org/business-for-good/'
        )}?size=75`,
      },
      {
        competition_name: 'CommonBond Social Impact Award',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'CommonBond',
        website: 'http://www.commonbond-sia.co/',
        most_recent_application_due_date: '6/2/2017',
        amount: 10000,
        amount_notes: null,
        geographic_region: 'North America',
        country: 'United States',
        target_entrepreneur_demographic: null,
        notes:
          'Company is looking to honor and celebrate a social entrepreneur who is creating positive social impact locally or globally',
        early_stage_funding: false,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://www.commonbond-sia.co/'
        )}?size=75`,
      },
      {
        competition_name: 'Eco-Audit Grant',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity:
          'EcoRise Youth & City of Austin Office of Sustainability',
        website: 'http://ecorise.org/programs-services/eco-audit-grant/',
        most_recent_application_due_date: null,
        amount: 500,
        amount_notes: '$500/project and campuses are limited to $2,000/year',
        geographic_region: 'North America',
        country: 'United States',
        target_entrepreneur_demographic: null,
        notes:
          'Eligible parties include teachers, campus administrators, or club advisors at a K-12 public or private school. Different timelines for fall and spring applications',
        early_stage_funding: false,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://ecorise.org/programs-services/eco-audit-grant/'
        )}?size=75`,
      },
      {
        competition_name: 'Education Business Plan Competition (EBPC)',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity:
          'University of Chicago Booth School of Business & Yale School of Management',
        website:
          'http://yaleeducationconference.com/education-business-plan-competition/',
        most_recent_application_due_date: '1/27/2017',
        amount: 10000,
        amount_notes: null,
        geographic_region: 'North America',
        country: 'United States',
        target_entrepreneur_demographic: null,
        notes:
          'Open to undergraduates and graduates. Do not need to be affiliated with a university to apply.',
        early_stage_funding: false,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://yaleeducationconference.com/education-business-plan-competition/'
        )}?size=75`,
      },
      {
        competition_name: 'Fish 2.0',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'Fish 2.0',
        website: 'http://www.fish20.org/',
        most_recent_application_due_date: '4/29/2017',
        amount: 5000,
        amount_notes:
          'Two finalists in each track will receive $5,000 each. Sponsors can offer finalists additional awards.',
        geographic_region: 'North America',
        country: 'United States',
        target_entrepreneur_demographic: null,
        notes: null,
        early_stage_funding: false,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://www.fish20.org/'
        )}?size=75`,
      },
      {
        competition_name:
          'Fletcher D-Prize: Poverty Solutions Venture Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity:
          'Fletcher School of Law and Diplomacy, Tufts University',
        website: 'http://fletcher.tufts.edu/D-Prize',
        most_recent_application_due_date: '11/7/2016',
        amount: 20000,
        amount_notes: null,
        geographic_region: 'Global',
        target_entrepreneur_demographic: null,
        notes:
          'At least one person on team must be a current student or a graduate of the Fletcher School',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://fletcher.tufts.edu/D-Prize'
        )}?size=75`,
      },
      {
        competition_name: 'Food + City Challenge Prize',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'University of Texas at Austin',
        website: 'http://www.foodandcity.org/challenge-prize/',
        most_recent_application_due_date: '10/15/2016',
        amount: 30000,
        amount_notes: 'Up to $30,000',
        geographic_region: 'Global',
        target_entrepreneur_demographic: null,
        notes: 'Formerly known as the Food Challenge Prize',
        early_stage_funding: false,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://www.foodandcity.org/challenge-prize/'
        )}?size=75`,
      },
      {
        competition_name: 'Fuller Challenge',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'Buckminster Fuller Institute',
        website: 'https://bfi.org/challenge/',
        most_recent_application_due_date: '3/1/2017',
        amount: 100000,
        amount_notes: null,
        geographic_region: 'Global',
        target_entrepreneur_demographic: null,
        notes: '--',
        early_stage_funding: false,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'https://bfi.org/challenge/'
        )}?size=75`,
      },
      {
        competition_name: 'GHIC Innovation Prize',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'Unite For Sight',
        website: 'http://www.uniteforsight.org/conference/innovation-prize',
        most_recent_application_due_date: '8/31/2017',
        amount: 10000,
        amount_notes: '1st place: $10,000\n 2nd place: $5,000',
        geographic_region: 'Global',
        target_entrepreneur_demographic: null,
        notes:
          'All conference registrants — both students and professionals, and both nonprofit and for-profit organizations — are eligible to apply for the Innovation Prize',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://www.uniteforsight.org/conference/innovation-prize'
        )}?size=75`,
      },
      {
        competition_name: 'Grinnell College Innovator for Social Justice Prize',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'Grinnell College',
        website: 'http://www.grinnell.edu/grinnellprize',
        most_recent_application_due_date: '10/9/2017',
        amount: 100000,
        amount_notes:
          '$100,000: $50,000 to individual and $50,000 to organization',
        geographic_region: 'Global',
        target_entrepreneur_demographic: null,
        notes: null,
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://www.grinnell.edu/grinnellprize'
        )}?size=75`,
      },
      {
        competition_name: 'Hult Prize',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity:
          'Hult International Business School & Clinton Global Initiative',
        website: 'http://www.hultprize.org/',
        most_recent_application_due_date: '12/23/2017',
        amount: 1000000,
        amount_notes: null,
        geographic_region: 'Global',
        target_entrepreneur_demographic: null,
        notes:
          'To apply, you must be currently enrolled in college or university; maximum of one alumnus per team',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://www.hultprize.org/'
        )}?size=75`,
      },
      {
        competition_name: 'Innovation Corps (I-Corps)',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'National Science Foundation',
        website: 'http://www.nsf.gov/news/special_reports/i-corps/',
        most_recent_application_due_date: null,
        amount: 50000,
        amount_notes: '$50,000 (to selected teams)',
        geographic_region: 'North America',
        country: 'United States',
        target_entrepreneur_demographic: null,
        notes:
          'Must have an active NSF award or one that has been active within the previous five years. Each team member must commit a minimum of 15 hours per week to the program, which offers a combination of in-\u00adperson “bootcamp” training and webinars over the course of a 7-\u00adweek period. If interested, contact Taryn Upchurch at taryn@stanford.edu',
        early_stage_funding: false,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://www.nsf.gov/news/special_reports/i-corps/'
        )}?size=75`,
      },
    ]);
  });
};
