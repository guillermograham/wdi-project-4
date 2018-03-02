/* global describe, afterEach, beforeEach, it, api, expect */

require('../spec_helper');

const testUserData = {
  username: 'testUser',
  email: 'testuser@ga.co',
  password: 'password',
  passwordConfirmation: 'password',
};

const testDeckData = {
  name: 'Colours',
  image: 'colours.jpg',
  level: 'Beginner',
  language: 'Spanish',
  cards: [
    {
      Question: 'Yellow',
      Answer: 'Amarillo'
    },{
      Question: 'Red',
      Answer: 'Rojo'
    }
  ]
};

describe('Decks Controller Test', () => {
  let token = null;

  User
  .create(testUserData)
  .then(user => {
    testDeckData.createdBy = user;

    return Deck.create(testDeckData);
  })
  .then(event => {
    testDeck = event;

    api
      .post('/api/register')
      .set('Accept', 'application/json')
      .send(testUserData)
      .end((err, res) => {
        token = res.body.token;
        done();
      });
  })
  .catch(done);
});

  describe('GET /api/decks', () => {
    it('should return a 200 response', done => {
      api
        .get('/api/decks')
        .set('Accept', 'application/json')
        .expect(200, done);
    });
  });
});
