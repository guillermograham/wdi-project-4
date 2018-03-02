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

    it('should return an array of deck objects', done => {
      api
        .get('/api/decks')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.body)
            .to.be.an('array')
            .and.have.property(0)
            .and.have.all.keys([
              'name',
              'image',
              'level',
              'language',
              'cards',
              'createdBy',
              'favourites',
              'id'
            ]);
          done();
        });
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

    it('should return an array of deck objects', done => {
      api
        .get(`/api/decks/${testDeck.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.body)
            .to.be.an('object')
            .and.have.all.keys([
              'name',
              'image',
              'level',
              'language',
              'cards',
              'createdBy',
              'favourites',
              'id'
            ]);
          done();
        });
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

      // works when adding .id, but not without
      testDeck.createdBy = testDeck.createdBy.id;
      console.log('testDeck*******************',testDeck);

      api
        .put(`/api/decks/${testDeck.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send(testDeck)
        .expect(200, done);
    });

    it('should return updated deck data in response body', done => {
      testDeck.name = 'Food';
      testDeck.createdBy = testDeck.createdBy.id;

      api
        .put(`/api/decks/${testDeck.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send(testDeck)
        .end((err, res) => {
          expect(res.body)
            .to.be.an('object')
            .and.to.have.property('name', 'Food');

          done();
        });
    });
  });

  // POST ROUTE
  describe('POST /api/decks', () => {
    let token = null;

    beforeEach(done => {
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send(testUserData)
        .end((err, res) => {
          token = res.body.token;
          done();
        });
    });


    it('should return a 201 response', done => {
      api
        .post('/api/decks')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send(testDeckData)
        .end((err, res) => {
          expect(res.status).to.eq(201);
          done();
        });
    });

    it('should return created deck data in response body', done => {
      api
        .post('/api/decks')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send(testDeckData)
        .end((err, res) => {
          expect(res.body)
            .to.be.an('object')
            .and.have.all.keys([
              'name',
              'image',
              'level',
              'language',
              'cards',
              'createdBy',
              'favourites',
              'id'
            ]);
          done();
        });
    });
  });

});
