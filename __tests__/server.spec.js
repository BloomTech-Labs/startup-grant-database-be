const request = require('supertest');
const server = require('../api/server');

describe('server.js', () => {
  it('should return 200 on test route', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
  });
  it('should return application/json', async () => {
    const res = await request(server).get('/');
    expect(res.type).toBe('application/json');
  });
  it('should return return an object with a key of server and a value of running', async () => {
    const res = await request(server).get('/');
    expect(res.body.server).toBe('running');
  });
});
