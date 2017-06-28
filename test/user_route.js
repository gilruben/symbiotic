const expect = require('chai').expect;
const supertest = require('supertest');
const server = require('../src/back/server');
const agent = supertest.agent(server);

describe('user-route-test', () => {
  let newUser = { email: 'gumby@gmail.com', password: 'password', firstName: 'Gumby', lastName: 'Clay' };

  // Test to create a new user
  it('\'/api/user\' should respond with the user created', (done) => {
    agent
    .post('/api/user')
    .send(newUser)
    .end((err, res) => {
      expect(res.body.username).equal(newUser.username);
      expect(res.body.email).equal(newUser.email);
      expect(res.body.password).equal(undefined);

      done();
    });
  });

});
