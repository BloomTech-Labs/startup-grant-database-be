require('dotenv').config();
const request = require('supertest');
const jwt = require('jsonwebtoken');
const server = require('../api/server');
const checkJwt = require('../api/middleware/restricted.middleware');

jest.mock('../api/middleware/restricted.middleware');

const user = {
  'https://founder-grants.com/appdata': {
    get: 'adminStaging',
    roles: ['admin'],
    authorization: {
      roles: ['Moderator'],
      permissions: [
        'get:adminLocal',
        'get:adminStaging',
        'get:adminProduction',
      ],
    },
  },
  iss: 'https://founder-grants.auth0.com/',
  sub: 'auth0|5d9525bdaed7ac0d51b1103a',
  aud: [
    'https://labs16-grantly.herokuapp.com/api/admin',
    'https://founder-grants.auth0.com/userinfo',
  ],
  azp: 'ThqNIwyCL9cm3yOhLjmeZjaf2StUc6Rp',
  scope:
    'openid profile email get:adminLocal get:adminStaging get:adminProduction',
  permissions: [],
};

const token = jwt.sign(user, 'UserTesting', { expiresIn: '1d' });

const badToken = 'Bearer BadToken';

beforeEach(() => {
  checkJwt.mockImplementation(options => {
    const mockFunc = (req, res, next) => {
      if (!token) {
        res.status(401).send('no token provided');
      } else {
        req.user = user;
        next();
      }
    };
    mockFunc.unless = jest.fn(args => (req, res, next) => {
      if (args.method === req.method && args.path === req.path) {
        next();
      } else {
        mockFunc(req, res, next);
      }
    });
    return mockFunc;
  });
});

describe('Testing environment', () => {
  it('DB_ENV should be testing', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });
});
describe('Users Router', () => {
  beforeEach(() => {
    checkJwt.UnauthorizedError.mockRejectedValue(false);
  });
  describe('No Token', () => {
    it('should return 401 on All Users Route', async () => {
      const res = await request(server).get('/api/admin/users');
      expect(res.status).toBe(401);
    });
  });
  describe('Bad Token', () => {});
});
