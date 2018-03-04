const mongoose = require('mongoose');
const { db, env } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(db[env]);

const Deck = require('../models/deck');
const User = require('../models/user');

Deck.collection.drop();
User.collection.drop();

User
  .create([{
    username: 'Will',
    email: 'will@ga.co',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    username: 'Swiss_Toni',
    email: 'swiss_toni@ga.co',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    username: 'Rane',
    email: 'rane@ga.co',
    password: 'password',
    passwordConfirmation: 'password'
  }, {
    username: 'Guy',
    email: 'guy@ga.co',
    password: 'password',
    passwordConfirmation: 'password'
  }])
  .then((users) => {
    // console.log(users);
    console.log(`${users.length} users created`);
    return Deck
      .create([{
        name: 'Numbers',
        language: '',
        cards: [{
          question: '1',
          answer: ''
        },{
          question: '2',
          answer: ''
        },{
          question: '3',
          answer: ''
        },{
          question: '4',
          answer: ''
        },{
          question: '5',
          answer: ''
        }],
        createdBy: users[2]._id
      } ]);
  })
  .then((decks) => {
    // console.log(decks);
    console.log(`${decks.length} decks created`);
  })
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
