require('dotenv').config();
const request = require('supertest');
const server = require('../api/server');
const { getTestToken } = require('../data/auth0.config');

let token = null;
const badToken = 'TheBaddie';
beforeAll(async () => {
  token = await getTestToken();
});

describe('Testing environment', () => {
  it('DB_ENV should be testing', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });
});
describe('Users Router', () => {
  describe('No Token', () => {
    it('should return 401 on All Users Route', async () => {
      const res = await request(server).get('/api/moderator/users');
      expect(res.status).toBe(401);
    });
  });
  describe('Bad Token', () => {
    it('should return 401 on All Users Route', async () => {
      const res = await request(server)
        .get('/api/moderator/users')
        .set('authorization', badToken);
      expect(res.status).toBe(401);
    });
  });
  describe('Good Token', () => {
    it('should return 401 on All Users Route when User is not a moderator', async () => {
      const res = await request(server)
        .get('/api/moderator/users')
        .set('authorization', token);
      console.log('Good Token Non Moderator Response: %j', res);
      expect(res.status).toBe(403);
    });
  });
});
