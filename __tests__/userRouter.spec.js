require('dotenv').config();
const request = require('supertest');
const server = require('../api/server');
const db = require('../data/db-config');
const axios = require('axios');

const badToken = "Bearer BadToken";
let token = null;
const requestBody = {
    client_id: process.env.CLIENT_ID_TEST,
    client_secret: process.env.CLIENT_SECRET_TEST,
    audience: process.env.TEST_AUDIENCE,
    grant_type: "client_credentials"
};

beforeAll(async () => {
    const res = await axios.post(`https://${process.env.DOMAIN}/oauth/token`, requestBody);
    token = `Bearer ${res.data.access_token}`;
});


describe('Testing environment', () => {
    it('DB_ENV should be testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    })
})
describe('Users Router', () => {
    describe('No Token Provided', () => {
        it('should return 401 on POST Route', async () => {
            const res = await request(server).post('/api/users').send({email: 'test@gmail.com'});
            expect(res.status).toBe(401);
        });
        it('should return 401 on PUT Route', async () => {
            const res = await request(server).put('/api/users/1').send({first_name: 'Test User'});
            expect(res.status).toBe(401)
        });
        it('should return 401 on DELETE Route', async () => {
            const res = await request(server).delete('/api/users/1');
            expect(res.status).toBe(401);
        })
    })
    describe('Bad Token Provided', () => {
        it('should return 401 on POST Route', async () => {
            const res = await request(server).post('/api/users').send({email: 'test@gmail.com'}).set("Authorization", badToken);
            expect(res.status).toBe(401);
        });
        it('should return 401 on PUT Route', async () => {
            const res = await request(server).put('/api/users/1').send({first_name: 'Test User'}).set("Authorization", badToken);
            expect(res.status).toBe(401)
        });
        it('should return 401 on DELETE Route', async () => {
            const res = await request(server).delete('/api/users/1').set("Authorization", badToken);
            expect(res.status).toBe(401);
        })
    })
    describe('Token provided', () => {
        it('should return 201 on POST Route when User is not in the Database', async () => {
            const res = await request(server).post('/api/users').send({email: 'test@gmail.com'}).set("Authorization", token);
            expect(res.status).toBe(201);
        });
        it('should return 200 on POST Route when User is in the Database', async () => {
            const res = await request(server).post('/api/users').send({email: 'test@gmail.com'}).set("Authorization", token);
            expect(res.status).toBe(200);
        })
        it('should return 200 on PUT Route when user is updated in the Database', async () => {
            const res = await request(server).put('/api/users/1').send({first_name: 'Test User'}).set("Authorization", token);
            expect(res.status).toBe(200)
        });
        it('should return 200 on DELETE Route', async () => {
            const res = await request(server).delete('/api/users/1').set("Authorization", token);
            expect(res.status).toBe(200);
        })
        it('should return 404 on PUT and DELETE Routes when Params ID is not in the Database', async () => {
            const putRes = await request(server).put('/api/users/99').send({first_name: 'Test User'}).set('Authorization', token);
            const deleteRes = await request(server).delete('/api/users/99').set('Authorization', token);
            expect(putRes.status).toBe(404);
            expect(deleteRes.status).toBe(404);
        })
    })
});
