/* global describe, afterEach, beforeEach, it, api, expect */

require('../spec_helper');

const Deck = require('../../models/deck');
const User = require('../../models/user');

const testUserData = {
  username: 'testUser',
  email: 'testuser@ga.co',
  password: 'password',
  passwordConfirmation: 'password'
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

describe('Decks Controller Tests', () => {
  afterEach(done => {
    Deck.collection.drop();
    User.collection.drop();
    done();
  });

  // INDEX ROUTE
  describe('GET /api/decks', () => {

    let testDeck = null;
    let token = null;

    beforeEach(done => {

      User
        .create(testUserData)
        .then(user => {
          testDeckData.createdBy = user;

          return Deck.create(testDeckData);
        })
        .then(deck => {
          testDeck = deck;

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

    it('should return a 200 response', done => {
      api
        .get('/api/decks')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .expect(200, done);
    });
  });

  // SHOW ROUTE
  describe('GET /api/decks/:id', () => {

    let testDeck = null;
    let token = null;

    beforeEach(done => {

      User
        .create(testUserData)
        .then(user => {
          testDeckData.createdBy = user;

          return Deck.create(testDeckData);
        })
        .then(deck => {
          testDeck = deck;

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

    it('should reutrn a 200 response', done => {
      api
        .get(`/api/decks/${testDeck.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .expect(200, done);
    });

  });

  // UPDATE ROUTE
  describe('PUT /api/decks/:id', () => {

    let testDeck = null;
    let token = null;

    beforeEach(done => {

      User
        .create(testUserData)
        .then(user => {
          testDeckData.createdBy = user;

          return Deck.create(testDeckData);
        })
        .then(deck => {
          testDeck = deck;

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

    it('should return a 200 response', done => {
      testDeck.name = 'Food';

      api
        .put(`/api/decks/${testDeck.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send(testDeck)
        .expect(200, done);
    });

    it('should return updated deck data in response body', done => {
      testDeck.name = 'Food';

      api
        .put(`/api/decks/${testDeck.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send(testDeck)
        .end((err, res) => {
          expect(res.body)
            .to.be.an('object')
            .and.to.have.property('name', 'Pizza Party');

          done();
        });
    });
  });

});
