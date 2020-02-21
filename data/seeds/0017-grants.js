const modifiedUrl = require('../helpers/modifyUrl');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('grants').then(function() {
    // Inserts seed entries
    return knex('grants').insert([
      {
        competition_name: 'Bay Area Global Health Innovation Challenge',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity:
          'Funded by HealthRoots Foundation for Global Health, in partnership with the UC Berkeley Center for Global Public Health and the Stanford Center for Innovation in Global Health.',
        website: 'http://www.bayareaglobalhealthchallenge.com/',
        most_recent_application_due_date: '2/28/2017',
        amount: 10000,
        amount_notes:
          '$10,000 in seed funding, and will have the opportunity to engage a high-level cohort of judges and speakers.',
        geographic_region: 'Bay Area',
        domain_areas:
          'We offer student teams from universities worldwide the opportunity to present their ideas for low-cost, high-impact, and scalable global health innovations.',
        target_entrepreneur_demographic: null,
        notes:
          'An annual competition hosted by the University of California, Berkeley, Stanford University, and the HealthRoots Foundation for Global Health, it offers student teams from universities worldwide the opportunity to present ideas for low-cost, high-impact, scalable global health innovations.',
        early_stage_funding: false,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://www.bayareaglobalhealthchallenge.com/'
        )}?size=75`,
      },
      {
        competition_name: 'Clinton Global Initiative University 2017',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'Clinton Global Initiative University',
        website:
          'https://www.clintonfoundation.org/clinton-global-initiative/meetings/cgi-university/apply/before-you-apply',
        most_recent_application_due_date: '3/1/2017',
        amount: null,
        amount_notes: null,
        geographic_region: 'United States',
        domain_areas:
          'CGI U challenges young leaders and entrepreneurs to become agents of positive social change by developing a Commitment to Action: a new, specific, and measurable plan to address a challenge in one of CGI U’s five focus areas.',
        target_entrepreneur_demographic: null,
        notes: null,
        early_stage_funding: false,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'https://www.clintonfoundation.org/clinton-global-initiative/meetings/cgi-university/apply/before-you-apply'
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
      {
        competition_name: 'Roddenberry Prize',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'The Roddenberry Foundation',
        website: 'https://roddenberryprize.org/',
        most_recent_application_due_date: '11/1/2016',
        amount: 1000000,
        amount_notes: '$1 MILLION IN AWARDS',
        geographic_region: 'Unspecified',
        domain_areas:
          'Whether it spoke to the arts, science and tech, education, healthcare or human rights, or came from a group or individuals, working locally or globally—what mattered was the potential for impact. What mattered was moving the needle. Welcoming a wide range of solutions was designed to spur cross-topic innovation and broaden the reach of potential applicants and issue areas addressed.',
        target_entrepreneur_demographic: null,
        notes:
          'In our 2016 Prize Impact Report, Accelerating Innovation Together, we unpack these stats, what we learned, data that interested us, statistics that surprised us, and how we can keep pushing ourselves to improve. We’re sharing this information in the hope that it will be a resource to those of you (funders and innovators) seeking to make the planet a fairer, more equitable and healthy place to live.',
        early_stage_funding: false,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'https://roddenberryprize.org/'
        )}?size=75`,
      },
      {
        competition_name: 'BridgeBuilder Challenge',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'GHR Foundation',
        website:
          'https://challenges.openideo.com/challenge/bridgebuilder/brief?utm_medium=email&utm_source=outreach&utm_campaign=bridge+ideas+briefjason',
        most_recent_application_due_date: '4/6/2017',
        amount: 1000000,
        amount_notes:
          'Receive a share of $1 million in funding from GHR Foundation.',
        geographic_region: 'Unspecified',
        domain_areas:
          'In the BridgeBuilder Challenge, we are collaboratively designing solutions that address urgent global challenges in radically new ways such as: working at the intersection, collaborating across divides, and focusing on process and infrastructure.',
        target_entrepreneur_demographic: null,
        notes:
          "During our Ideas phase, we'll call a global community to action – to share solutions that address urgent challenges at the intersections of peace, prosperity, and planet in radically new ways. These ideas should bridge solutions in two of the three issue areas.",
        early_stage_funding: false,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'https://challenges.openideo.com/challenge/bridgebuilder/brief?utm_medium=email&utm_source=outreach&utm_campaign=bridge+ideas+briefjason'
        )}?size=75`,
      },
      {
        competition_name: 'Westly Prize',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'Westly Foundation',
        website: 'http://westly.org/westly-prize/',
        most_recent_application_due_date: '10/15/2017',
        amount: 25000,
        amount_notes: null,
        geographic_region: 'California',
        domain_areas: 'Any',
        target_entrepreneur_demographic: null,
        notes: 'For novel solutions to community challenges',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '7/7/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://westly.org/westly-prize/'
        )}?size=75`,
      },
      {
        competition_name: 'MIT Climate CoLab',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'MIT',
        website: 'http://news.climatecolab.com/2017/06/2024/',
        most_recent_application_due_date: '9/10/2017',
        amount: 10000,
        amount_notes: null,
        geographic_region: 'Any',
        domain_areas: 'Climate / Environmental',
        target_entrepreneur_demographic: null,
        notes: 'Seven different specific challenges',
        early_stage_funding: false,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '7/7/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://news.climatecolab.com/2017/06/2024/'
        )}?size=75`,
      },
      {
        competition_name: 'Denver Food Access Project',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'The Unreasonable Institute',
        website: 'http://foodaccessproject.org/',
        most_recent_application_due_date: '7/7/2017',
        amount: null,
        amount_notes: null,
        geographic_region: 'Denver',
        domain_areas: 'Food Access',
        target_entrepreneur_demographic: null,
        notes:
          'a mission to give every low-income neighborhood in Denver access to healthy affordable food',
        early_stage_funding: false,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '7/7/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://foodaccessproject.org/'
        )}?size=75`,
      },
      {
        competition_name: 'D-Prize',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'D-Prize',
        website: 'https://www.d-prize.org/',
        most_recent_application_due_date: '9/10/2017',
        amount: 20000,
        amount_notes: 'up to $20,000',
        geographic_region: 'Any',
        domain_areas:
          'Girl\'s Education, Agriculture, Energy, Global Health, Education, Governance and Infrastructure, "Propose your own',
        target_entrepreneur_demographic: null,
        notes:
          'Option to choose from available challenges or to submit your own challenge and solution',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '7/7/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'https://www.d-prize.org/'
        )}?size=75`,
      },
      {
        competition_name: 'The Pollination Project',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'The Pollination Project',
        website: 'https://thepollinationproject.org/about-us/',
        most_recent_application_due_date: null,
        amount: 1000,
        amount_notes: null,
        geographic_region: 'Any',
        domain_areas: 'Social Change',
        target_entrepreneur_demographic: null,
        notes:
          'Through a daily practice of generosity and giving, we make seed grants- 365 days a year- to social change agents who seek to spread compassion\nin their communities and in the world for the benefit of all.',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '7/7/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'https://thepollinationproject.org/about-us/'
        )}?size=75`,
      },
      {
        competition_name: 'GLG Social Impact Fellowship',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'GLG',
        website: 'http://glgsocialimpact.com/fellows/',
        most_recent_application_due_date: '7/17/2017',
        amount: null,
        amount_notes: null,
        geographic_region: 'Any',
        domain_areas: 'Social Entrepreneurship',
        target_entrepreneur_demographic: null,
        notes:
          'The GLG Social Impact Fellowship leverages GLG’s learning platform to help top social entrepreneurs answer their organization’s critical strategic and operational questions, at no cost. Through the two-year Fellowship, ambitious and visionary nonprofit and social enterprise leaders learn in tailored interactions with experts across GLG’s membership and with each other.',
        early_stage_funding: false,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '7/7/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://glgsocialimpact.com/fellows/'
        )}?size=75`,
      },
      {
        competition_name: 'NatGeo Chasing Genius Challenge',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'National Geographic',
        website: 'http://www.natgeochasinggenius.com/',
        most_recent_application_due_date: '8/15/2017',
        amount: 25000,
        amount_notes: null,
        geographic_region: 'Global',
        domain_areas:
          '3 topic areas: Sustainable Planet, Global Health, and Feeding 9 Billion',
        target_entrepreneur_demographic: null,
        notes: '--',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/22/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://www.natgeochasinggenius.com/'
        )}?size=75`,
      },
      {
        competition_name: 'City Innovate (80+ Challenges to Improve Cities)',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'Startup in Residence',
        website: 'https://startupinresidence.org/search/',
        most_recent_application_due_date: '11/7/2018',
        amount: null,
        amount_notes: null,
        geographic_region: 'United States',
        domain_areas: 'GovTech',
        target_entrepreneur_demographic: null,
        notes:
          'An Open Call for Startups to Improve Government Services. 80+ GovTech Challenges',
        early_stage_funding: false,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '10/17/2018',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'https://startupinresidence.org/search/'
        )}?size=75`,
      },
      {
        competition_name: 'Biomimicry Challenge',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'Biomimicry Institute',
        website: 'https://challenge.biomimicry.org/',
        most_recent_application_due_date: '5/1/2019',
        amount: null,
        amount_notes: null,
        geographic_region: 'Global',
        domain_areas: 'Climate Change',
        target_entrepreneur_demographic: null,
        notes: 'Winners invited to participate in Biomimicry Launchpad',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '10/24/2018',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'https://challenge.biomimicry.org/'
        )}?size=75`,
      },
      {
        competition_name: 'Map the System',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity:
          'University of Oxford, Skoll Centre for Social Entrepreneurship at the Saïd Business School',
        website: 'http://www.oxfordglobalchallenge.com',
        most_recent_application_due_date: '4/1/2019',
        amount: 4000,
        amount_notes: '£4,000 cash prize',
        geographic_region: 'Global',
        domain_areas: 'Social and environmental change',
        target_entrepreneur_demographic: null,
        notes:
          'This competition asks you to select a social or environmental issue and to explore, probe, and research all the connecting elements and factors around it. We want you to present this issue back to us in a way that people can understand, share, and learn from.',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '2/13/2019',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://www.oxfordglobalchallenge.com'
        )}?size=75`,
      },
      {
        competition_name: 'Social Business Creation',
        type: 'Competition',
        area_focus: 'Social Entrepreneurship',
        sponsoring_entity: 'HEC Montréal',
        website: 'https://socialbusinesscreation.hec.ca/',
        most_recent_application_due_date: '3/28/2019',
        amount: 15000,
        amount_notes: '$15,000 cash + 1 tuition waiver',
        geographic_region: 'Global',
        domain_areas: 'social impact',
        target_entrepreneur_demographic: null,
        notes:
          'Structured as a course which provides experiential learning, 4 rounds',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '2/13/2019',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'https://socialbusinesscreation.hec.ca/'
        )}?size=75`,
      },
    ]);
  });
};
