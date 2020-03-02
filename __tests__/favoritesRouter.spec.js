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

describe('Favorites Router', () => {
  describe('No Token Provided', () => {
    it('should return 401 on get favorites', async () => {
      const res = await request(server).get('/api/users/1/favorites');
      expect(res.status).toBe(401);
    });
    it('should return 401 on get favorite by id', async () => {
      const res = await request(server).get('/api/users/favorites/1');
      expect(res.status).toBe(401);
    });
    it('should return 401 on POST favorite', async () => {
      const res = await request(server)
        .post('/api/users/favorites')
        .send(null);
      expect(res.status).toBe(401);
    });
    it('should return 401 on DELETE favorite', async () => {
      const res = await request(server).delete('/api/users/favorites/1');
      expect(res.status).toBe(401);
    });
  });
  describe('Bad Token Provided', () => {
    it('should return 401 on get favorites', async () => {
      const res = await request(server)
        .get('/api/users/1/favorites')
        .set('Authorization', badToken);
      expect(res.status).toBe(401);
    });
    it('should return 401 on get favorite by id', async () => {
      const res = await request(server)
        .get('/api/users/favorites/1')
        .set('Authorization', badToken);
      expect(res.status).toBe(401);
    });
    it('should return 401 on POST favorite', async () => {
      const res = await request(server)
        .post('/api/users/favorites')
        .send(null)
        .set('Authorization', badToken);
      expect(res.status).toBe(401);
    });
    it('should return 401 on DELETE favorite', async () => {
      const res = await request(server)
        .delete('/api/users/favorites/1')
        .set('Authorization', badToken);
      expect(res.status).toBe(401);
    });
  });
  describe('Token provided', () => {
    it('should return 201 on new Favorite', async () => {
      const res = await request(server)
        .post('/api/users/favorites')
        .send({ grant_id: 1, auth_id: 'Test' })
        .set('Authorization', token);
      expect(res.status).toBe(201);
    });
    it('should return 200 on GET list of Favorites with provided user id', async () => {
      const res = await request(server)
        .get('/api/users/9wxzo3C30d8bDIsv8KcLBZCiVB5cEm7@clients/favorites')
        .set('Authorization', token);
      expect(res.status).toBe(200);
    });
    it('should return 200 on GET favorite by id', async () => {
      const res = await request(server)
        .get('/api/users/favorites/1')
        .set('Authorization', token);
      expect(res.status).toBe(200);
    });
    it('should return 200 on DELETE Favorite by id', async () => {
      const res = await request(server)
        .delete('/api/users/favorites/1')
        .set('Authorization', token);
      expect(res.status).toBe(200);
    });
  });
});
