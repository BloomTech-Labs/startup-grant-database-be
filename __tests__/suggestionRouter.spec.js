const request = require('supertest');
const axios = require('axios');
const server = require('../api/server');

const badToken = 'Bearer BadToken';
let token = null;
const requestBody = {
  client_id: process.env.CLIENT_ID_TEST,
  client_secret: process.env.CLIENT_SECRET_TEST,
  audience: process.env.TEST_AUDIENCE,
  grant_type: 'client_credentials',
};

beforeAll(async () => {
  const res = await axios.post(
    `https://${process.env.DOMAIN}/oauth/token`,
    requestBody
  );
  token = `Bearer ${res.data.access_token}`;
});

const testSuggestion = {
  subject: 'test',
  suggestion: 'Testing Suggestion Router',
  grant_id: 1,
};

describe('Suggestion Router', () => {
  describe('No Token Provided', () => {
    it('should return 401 on Get Suggestions By Grant Id', async () => {
      const res = await request(server).get('/api/grants/1/suggestion');
      expect(res.status).toBe(401);
    });
    it('should return 401 on Get Suggestions By Suggestion Id', async () => {
      const res = await request(server).get('/api/grants/suggestion/1');
      expect(res.status).toBe(401);
    });
    it('should return 401 on Post Suggestion', async () => {
      const res = await request(server)
        .post('/api/grants/1/suggestion')
        .send(testSuggestion);
      expect(res.status).toBe(401);
    });
    it('should return 401 on DELETE Suggestions By Grant Id', async () => {
      const res = await request(server).delete('/api/grants/1/suggestion/1');
      expect(res.status).toBe(401);
    });
  });
  describe('Bad Token Provided', () => {
    it('should return 401 on Get Suggestions By Grant Id', async () => {
      const res = await request(server)
        .get('/api/grants/1/suggestion')
        .set('Authorization', badToken);
      expect(res.status).toBe(401);
    });
    it('should return 401 on Get Suggestions By Suggestion Id', async () => {
      const res = await request(server)
        .get('/api/grants/suggestion/1')
        .set('Authorization', badToken);
      expect(res.status).toBe(401);
    });
    it('should return 401 on Post Suggestion', async () => {
      const res = await request(server)
        .post('/api/grants/suggestion')
        .send(testSuggestion)
        .set('Authorization', badToken);
      expect(res.status).toBe(401);
    });
    it('should return 401 on DELETE Suggestions By Grant Id', async () => {
      const res = await request(server)
        .delete('/api/grants/suggestion/1')
        .set('Authorization', badToken);
      expect(res.status).toBe(401);
    });
  });
  describe('Token Provided', () => {
    it('should return 201 on Post Suggestion', async () => {
      const res = await request(server)
        .post('/api/grants/suggestion')
        .send(testSuggestion)
        .set('Authorization', token);
      expect(res.status).toBe(201);
    });
    it('should return 200 on Get Suggestions By Grant Id', async () => {
      const res = await request(server)
        .get('/api/grants/1/suggestion')
        .set('Authorization', token);
      expect(res.status).toBe(200);
    });

    it('should return 200 on Get Suggestions By Suggestion Id', async () => {
      const res = await request(server)
        .get('/api/grants/suggestion/1')
        .set('Authorization', token);
      expect(res.status).toBe(200);
    });
    it('should return 200 on DELETE Suggestions By Grant Id', async () => {
      const res = await request(server)
        .delete('/api/grants/suggestion/1')
        .set('Authorization', token);
      expect(res.status).toBe(200);
    });
    it('should return 404 on Get Suggestions By Suggestion Id when Id is not Found', async () => {
      const res = await request(server)
        .get('/api/grants/suggestion/99')
        .set('Authorization', token);
      expect(res.status).toBe(404);
    });
    it('should return 404 on DELETE Suggestions By Grant Id', async () => {
      const res = await request(server)
        .delete('/api/grants/suggestion/1')
        .set('Authorization', token);
      expect(res.status).toBe(404);
    });
  });
});
