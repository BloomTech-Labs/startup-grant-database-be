const modifiedUrl = require('../helpers/modifyUrl');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('grants').then(function() {
    // Inserts seed entries
    return knex('grants').insert([
      {
        competition_name: 'NextChallenge: Smart Cities',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'NextEnergy Center',
        website: 'http://www.nextenergy.org/nextchallenge/',
        most_recent_application_due_date: '8/18/2017',
        amount: 80000,
        amount_notes: null,
        geographic_region: 'Global',
        domain_areas: 'Innovation, energy savings, economic development',
        target_entrepreneur_demographic: null,
        notes: 'Up to $40,000 for non-Michigan-based applicants',
        early_stage_funding: false,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://www.nextenergy.org/nextchallenge/'
        )}?size=75`,
      },
      {
        competition_name: 'Notre Dame Global Adaptation Index Prize',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity:
          'University of Notre Dame Environmental Change Initiative',
        website: 'http://gain.org/nd-gain-prize',
        most_recent_application_due_date: null,
        amount: null,
        amount_notes: null,
        geographic_region: 'Global',
        domain_areas: 'Climate change in developing countries',
        target_entrepreneur_demographic: null,
        notes: null,
        early_stage_funding: false,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://gain.org/nd-gain-prize'
        )}?size=75`,
      },
      {
        competition_name: 'Powerful Answers Award',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'Verizon',
        website: 'http://www.verizon.com/about/portal/powerful-answers/',
        most_recent_application_due_date: '6/18/2015',
        amount: 1000000,
        amount_notes:
          '1 per category:\n 1st place: $1M\n 2nd place: $500K\n 3rd place: $250K',
        geographic_region: 'Global',
        domain_areas:
          'Transportation: smarter driving, public transport & sharing, distribution & logistics\n Emergency Response: first responders, search & rescue, long-term relief\n Internet of Things: connected health, smart cities, smart agriculture',
        target_entrepreneur_demographic: null,
        notes: null,
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://www.verizon.com/about/portal/powerful-answers/'
        )}?size=75`,
      },
      {
        competition_name: 'Rice University Business Plan Competition',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity:
          'Rice University Alliance for Technology and Entrepreneurship',
        website: 'http://alliance.rice.edu/rbpc.aspx',
        most_recent_application_due_date: '2/10/2017',
        amount: 1500000,
        amount_notes: '$1.5 million in prizes',
        geographic_region: 'Global',
        domain_areas: 'Unspecified',
        target_entrepreneur_demographic: null,
        notes: 'For university students',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://alliance.rice.edu/rbpc.aspx'
        )}?size=75`,
      },
      {
        competition_name: 'Social Innovation Award',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'Teach for America',
        website:
          'http://www.onedayallkids.org/awards-fellowships/social-innovation-award',
        most_recent_application_due_date: '1/9/2017',
        amount: 100000,
        amount_notes: null,
        geographic_region: 'United States',
        domain_areas: 'Low-income communities, educational inequity',
        target_entrepreneur_demographic: null,
        notes: 'Must be a Teach for America alum or corps member',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://www.onedayallkids.org/awards-fellowships/social-innovation-award'
        )}?size=75`,
      },
      {
        competition_name: 'Social Venture Challenge',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'The Resolution Project',
        website:
          'http://www.resolutionproject.org/about-social-venture-challenges',
        most_recent_application_due_date: null,
        amount: 3000,
        amount_notes: 'Up to $3,000',
        geographic_region: 'Global',
        domain_areas:
          'Impactful, socially responsible projects addressing pressing social issues around the world',
        target_entrepreneur_demographic: null,
        notes:
          'Winners are awarded the Resolution Fellowship, which includes ongoing mentorship, pro bono services, robust support, and access to the Resolution network. Check for various deadlines here: http://www.resolutionproject.org/svc/upcoming',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://www.resolutionproject.org/about-social-venture-challenges'
        )}?size=75`,
      },
      {
        competition_name:
          'Southern California Social Entrepreneurship Challenge',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'Academies for Social Entrepreneurship',
        website: 'http://www.socentchallenge.org/',
        most_recent_application_due_date: '7/31/2017',
        amount: 100000,
        amount_notes:
          '$100,000 in combined cash, extensive coaching, and investment advisory services',
        geographic_region: 'Global',
        domain_areas: 'Social enterprise',
        target_entrepreneur_demographic: null,
        notes:
          'Challenge will focus on linking promising social enterprises with venture philanthropists in Southern California',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://www.socentchallenge.org/'
        )}?size=75`,
      },
      {
        competition_name: 'Start-Up Challenge',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'Duke University',
        website: 'http://www.dukestartupchallenge.org/',
        most_recent_application_due_date: '10/30/2016',
        amount: 50000,
        amount_notes:
          '1st place: $50,000\n Open competition prizes: $10,000\n Top 15 student teams: $500 each\n AARP Foundation Prize: $5,000',
        geographic_region: 'Global',
        domain_areas: 'Unspecified',
        target_entrepreneur_demographic: null,
        notes: 'For Duke students/alumni only',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://www.dukestartupchallenge.org/'
        )}?size=75`,
      },
      {
        competition_name: 'Sunshot Catalyst Program',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'U.S. Department of Energy',
        website: 'http://energy.gov/eere/sunshot/sunshot-catalyst-program',
        most_recent_application_due_date: null,
        amount: null,
        amount_notes: 'Prizes vary',
        geographic_region: 'United States',
        domain_areas: 'Solar',
        target_entrepreneur_demographic: null,
        notes:
          'Catalyst program consists of ideation, business innovation, prototype, and incubation; also holds jamathons',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://energy.gov/eere/sunshot/sunshot-catalyst-program'
        )}?size=75`,
      },
      {
        competition_name: 'Sustainable Business Plan Collaboration',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'Mentor Capital Network',
        website: 'http://mentorcapitalnet.org/home/program/',
        most_recent_application_due_date: '10/16/2017',
        amount: 50000,
        amount_notes:
          'Up to $50,000 worth of cash and professional services will be divided among the finalists each year',
        geographic_region: 'Global',
        domain_areas:
          'Companies whose social, environmental, and/or cultural mission strengthens your financial margins',
        target_entrepreneur_demographic: null,
        notes: null,
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://mentorcapitalnet.org/home/program/'
        )}?size=75`,
      },
      {
        competition_name: 'Tech Award for Global Good',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'Tech Museum of Innovation',
        website: 'https://www.thetech.org/tech-global-good',
        most_recent_application_due_date: null,
        amount: 75000,
        amount_notes: '$25,000-$75,000',
        geographic_region: 'Global',
        domain_areas:
          'Environment, education, young innovator, health, economic development',
        target_entrepreneur_demographic: null,
        notes:
          'Email lzane@thetech.org for applications; ltsai@thetech.org for more info.',
        early_stage_funding: false,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'https://www.thetech.org/tech-global-good'
        )}?size=75`,
      },
      {
        competition_name: 'UCLA Anderson Challenges in Energy Case Competition',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'UCLA Anderson School of Management',
        website: 'http://andersonemg.weebly.com/case-competition.html',
        most_recent_application_due_date: '1/29/2017',
        amount: 5000,
        amount_notes: null,
        geographic_region: 'Global',
        domain_areas: 'Energy',
        target_entrepreneur_demographic: null,
        notes: 'Must travel to UCLA',
        early_stage_funding: false,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://andersonemg.weebly.com/case-competition.html'
        )}?size=75`,
      },
      {
        competition_name: 'Venture Philanthropy Grant',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'Margoes Foundation',
        website:
          'http://www.pfs-llc.net/foundations/margoes-foundation/grantseekers/venture-philanthropy',
        most_recent_application_due_date: null,
        amount: 50000,
        amount_notes: '$50,000 per year (for 3 years)',
        geographic_region: 'San Francisco Bay Area',
        domain_areas:
          'College access for low-income and underrepresented students',
        target_entrepreneur_demographic: null,
        notes:
          'For more information, contact Hector Melendez at hmelendez@pfs-llc.net, 415-561-6540, ext. 206, or Amy Freeman at afreeman@pfs-llc.net, 415-561-6540, ext. 224. Deadline not yet released. Opens in early 2018',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://www.pfs-llc.net/foundations/margoes-foundation/grantseekers/venture-philanthropy'
        )}?size=75`,
      },
      {
        competition_name: 'Wireless Innovation Project',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'Vodafone Americas Foundation',
        website: 'http://vodafone-us.com/wireless-innovation-project/',
        most_recent_application_due_date: '11/1/2017',
        amount: 300000,
        amount_notes:
          '1st place: $300,000\n 2nd place: $200,000\n 3rd place: $100,000',
        geographic_region: 'Global',
        domain_areas:
          'Technology, social impact. Social areas include access to communication, education, economic development, environment, health. Technical issues include connectivity, energy, language/literacy, ease of use.',
        target_entrepreneur_demographic: null,
        notes: null,
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://vodafone-us.com/wireless-innovation-project/'
        )}?size=75`,
      },
      {
        competition_name: 'Government of Chile - Ministry of Energy',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'Impacta Energy',
        website: 'https://www.impactaenergia.cl/en',
        most_recent_application_due_date: '7/12/2017',
        amount: 107000,
        amount_notes: '$7,000-$107,000',
        geographic_region: 'Chile',
        domain_areas:
          'Improve renewable energy and meet hosehold demands efficently',
        target_entrepreneur_demographic: null,
        notes:
          'Challenge that will seek ideas on addressing access, saving and promotion of energy as a source of development in Chile. New deadline not yet announced; last deadline was July 12, 2017',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'https://www.impactaenergia.cl/en'
        )}?size=75`,
      },
      {
        competition_name: 'Project Entrepreneur',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'UBS and Rent the Runway',
        website: 'http://projectentrepreneur.org/',
        most_recent_application_due_date: '11/21/2016',
        amount: 10000,
        amount_notes: null,
        geographic_region: 'United States',
        domain_areas:
          'Have an existing prototype or beta technology and plan to build high-growth companies',
        target_entrepreneur_demographic: null,
        notes:
          'Providing women access to the tools, training and networks needed to build scalable, economically impactful companies. Next deadline in fall 2017; previous deadline was 11/21/2016',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://projectentrepreneur.org/'
        )}?size=75`,
      },
      {
        competition_name:
          'Kellogg-Morgan Stanley Sustainable Investing Challenge',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity:
          'MacAthur Foundation, Generation Foundation, Equilibrium Capital, Finance in Motion, Milken Institute',
        website: 'http://sustainableinvestingchallenge.org/compete/',
        most_recent_application_due_date: '2/15/2017',
        amount: null,
        amount_notes: null,
        geographic_region: 'United States',
        domain_areas:
          'Have an idea that has a sustainable impact through an investment strategy that uses finance and investment tools to create an innovative solution to an environmental or societal challenge',
        target_entrepreneur_demographic: null,
        notes:
          'Develop creative financial approaches to tackle our world’s most pressing challenges',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://sustainableinvestingchallenge.org/compete/'
        )}?size=75`,
      },
      {
        competition_name: 'Global Social Venture Competition',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'Berkeley Haas',
        website: 'http://gsvc.org/apply/',
        most_recent_application_due_date: '12/4/2017',
        amount: 80000,
        amount_notes: null,
        geographic_region: 'United States',
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
        competition_name: 'EMA Innovator Challenge',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'EMA',
        website: 'http://www.makeanimpact2017.com/',
        most_recent_application_due_date: '2/15/2017',
        amount: 100000,
        amount_notes: null,
        geographic_region: 'Beverly Hills',
        domain_areas:
          "EMA serves as a valuable link between the world of media and the environmental community, working tirelessly to bring the planet's most pressing issues to the forefront of pop culture and make true change by inspiring the next generation of filmmakers and entrepreneurs.",
        target_entrepreneur_demographic: null,
        notes:
          'Each contestant must submit their business plan, as well as a short video pitch of their concept/company.',
        early_stage_funding: false,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://www.makeanimpact2017.com/'
        )}?size=75`,
      },
    ]);
  });
};
