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
});
