const request = require('supertest');
const axios = require('axios');
const server = require('../api/server');
const db = require('../data/db-config');

const badToken = 'Bearer BadToken';
let token = null;
const requestBody = {
  client_id: process.env.CLIENT_ID_TEST,
  client_secret: process.env.CLIENT_SECRET_TEST,
  audience: process.env.TEST_AUDIENCE,
  grant_type: 'client_credentials',
};

const grants = [
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
  },
];

const testGrant = {
  competition_name: 'test',
  type: 'test',
  area_focus: 'test',
  sponsoring_entity: 'test',
  website: 'test',
  most_recent_application_due_date: '01/01/2001',
  amount: '3',
  amount_notes: 'test',
  geographic_region: 'test',
  // domain_areas: "test",
  target_entrepreneur_demographic: 'test',
  notes: 'test',
  early_stage_funding: false,
  is_reviewed: false,
  has_requests: false,
  details_last_updated: '01/01/2001',
};

beforeAll(async () => {
  const res = await axios.post(
    `https://${process.env.DOMAIN}/oauth/token`,
    requestBody
  );
  token = `Bearer ${res.data.access_token}`;
  await db.migrate.rollback();
  await db.migrate.latest();
  await db('grants').insert(grants);
});

describe('Grant Routes', () => {
  describe('Public Routes', () => {
    it('should return 200 on All Grants', async () => {
      const res = await request(server).get('/api/grants');
      expect(res.status).toBe(200);
    });
    it('should have 4 grants in the database', async () => {
      const res = await request(server).get('/api/grants');
      expect(res.body.length).toBe(4);
    });
    it('should return a 200 on successful grant by id', async () => {
      const res = await request(server).get('/api/grants/1');
      expect(res.status).toBe(200);
    });
    it('should return a 404 on grant not in the db', async () => {
      const res = await request(server).get('/api/grants/99');
      expect(res.status).toBe(404);
    });
  });
  describe('Private Routes', () => {
    describe('No Token', () => {
      it('should return 401 on POST', async () => {
        const res = await request(server)
          .post('/api/grants')
          .send(testGrant);
        expect(res.status).toBe(401);
      });
    });
    describe('Bad Token', () => {
      it('should return 401 on POST', async () => {
        const res = await request(server)
          .post('/api/grants')
          .send(testGrant)
          .set('Authorization', badToken);
        expect(res.status).toBe(401);
      });
    });
    describe('Good Token', () => {
      it('should return 400 on POST with bad website', async () => {
        const res = await request(server)
          .post('/api/grants')
          .send(testGrant)
          .set('Authorization', token);
        expect(res.status).toBe(400);
      });

      it('should return 201 on POST', async () => {
        const res = await request(server)
          .post('/api/grants')
          .send({ ...testGrant, website: 'https://www.foundergrants.com' })
          .set('Authorization', token);
        expect(res.status).toBe(201);
      });
    });
  });
});
