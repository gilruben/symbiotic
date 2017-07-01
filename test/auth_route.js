const expect = require('chai').expect;
const supertest = require('supertest');
const server = require('../src/back/server');
const agent = supertest.agent(server);

describe('auth-api-test', () => {
  // Test to see if user can login
  it('\'/auth/login\' should respond with status 200', (done) => {
    agent
    .post('/auth/login')
    .send({ email: 'aread@gmail.com', password: 'password' })
    .end((err, res) => {
      expect(res.status).equal(200);

      done();
    });
  });

  // Test to see if authenticated user is logged in
  it('\'/auth/verify\' should respond with status 200', (done) => {
    agent
    .get('/auth/verify')
    .end((err, res) => {
      expect(res.status).equal(200);

      done();
    });
  });

  // Test to see if user can logout
  it('\'/auth/logout\' should respond with status 200', (done) => {
    agent
    .post('/auth/logout')
    .end((err, res) => {
      expect(res.status).equal(200);

      done();
    });
  });
});
