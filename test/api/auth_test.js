/* globals api, expect, it, describe, afterEach, beforeEach */
require('../spec_helper');

const User = require('../../models/user');

const testUser = {
  username: 'test',
  email: 'test@test.com',
  password: 'password',
  passwordConfirmation: 'password'
};

const testNonMatchingUser = {
  username: 'test',
  email: 'test@test.com',
  password: 'password'
};

describe('Authentication controller tests', () => {

  afterEach(done => {
    User.collection.remove();
    done();
  });

  // REGISTER ROUTE
  describe('POST /api/register', () => {
    it('should register a user providing the correct credentials', done => {
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send(testUser)
        .end((err, res) => {
          expect(res.status).to.eq(200);
          expect(res.body).to.be.a('object');
          expect(res.body.message).to.eq(`Thanks for registering ${testUser.username}, please login`);
          expect(res.body.token).to.be.a('string');
          done();
        });
    });

    it('should not register a user if password and passwordConfirmation do not match', done => {
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send(testNonMatchingUser)
        .end((err, res) => {
          expect(res.status).to.eq(422);
          expect(res.body).to.be.a('object');
          expect(res.body.message).to.eq('Unprocessable Entity');
          expect(res.body.errors).to.be.a('object');
          expect(res.body.errors['passwordConfirmation']).to.eq('does not match');
          done();
        });
    });
  });
});
