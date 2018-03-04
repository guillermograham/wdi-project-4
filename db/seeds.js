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
        language: 'Spanish',
        cards: [{
          question: '1',
          answer: 'Uno'
        },{
          question: '2',
          answer: 'Dos'
        },{
          question: '3',
          answer: 'Tres'
        },{
          question: '4',
          answer: 'Cuatro'
        },{
          question: '5',
          answer: 'Cinco'
        }],
        createdBy: users[2]._id
      },{
        name: 'Numbers',
        language: 'Italian',
        cards: [{
          question: '1',
          answer: 'Uno'
        },{
          question: '2',
          answer: 'Due'
        },{
          question: '3',
          answer: 'Tre'
        },{
          question: '4',
          answer: 'Quattro'
        },{
          question: '5',
          answer: 'Cinque'
        }],
        createdBy: users[2]._id
      },{
        name: 'Numbers',
        language: 'French',
        cards: [{
          question: '1',
          answer: 'Un'
        },{
          question: '2',
          answer: 'Deux'
        },{
          question: '3',
          answer: 'Trois'
        },{
          question: '4',
          answer: 'Quatre'
        },{
          question: '5',
          answer: 'Cinq'
        }],
        createdBy: users[2]._id
      },{
        name: 'Numbers',
        language: 'German',
        cards: [{
          question: '1',
          answer: 'Eins'
        },{
          question: '2',
          answer: 'Zwei'
        },{
          question: '3',
          answer: 'Drei'
        },{
          question: '4',
          answer: 'Vier'
        },{
          question: '5',
          answer: 'Fünf'
        }],
        createdBy: users[2]._id
      },{
        name: 'Numbers',
        language: 'Portuguese',
        cards: [{
          question: '1',
          answer: 'Um'
        },{
          question: '2',
          answer: 'Dois'
        },{
          question: '3',
          answer: 'Três'
        },{
          question: '4',
          answer: 'Quatro'
        },{
          question: '5',
          answer: 'Cinco'
        }],
        createdBy: users[2]._id
      },{
        name: 'Numbers',
        language: 'Romanian',
        cards: [{
          question: '1',
          answer: 'Unu'
        },{
          question: '2',
          answer: 'Doi'
        },{
          question: '3',
          answer: 'Trei'
        },{
          question: '4',
          answer: 'Patru'
        },{
          question: '5',
          answer: 'Cinci'
        }],
        createdBy: users[2]._id
      },{
        name: 'Fruit',
        language: 'Spanish',
        cards: [{
          question: 'Apple',
          answer: 'Manzana'
        },{
          question: 'Orange',
          answer: 'Naranja'
        },{
          question: 'Banana',
          answer: 'Plátano'
        },{
          question: 'Cherry',
          answer: 'Cereza'
        },{
          question: 'Mango',
          answer: 'Mango'
        }],
        createdBy: users[2]._id
      },{
        name: 'Fruit',
        language: 'French',
        cards: [{
          question: 'Apple',
          answer: 'Pomme'
        },{
          question: 'Orange',
          answer: 'Orange'
        },{
          question: 'Banana',
          answer: 'Banane'
        },{
          question: 'Cherry',
          answer: 'Cerise'
        },{
          question: 'Mango',
          answer: 'Mangue'
        }],
        createdBy: users[2]._id
      },{
        name: 'Fruit',
        language: 'German',
        cards: [{
          question: 'Apple',
          answer: 'Apfel'
        },{
          question: 'Orange',
          answer: 'Orange'
        },{
          question: 'Banana',
          answer: 'Banane'
        },{
          question: 'Cherry',
          answer: 'Kirsche'
        },{
          question: 'Mango',
          answer: 'Mango'
        }],
        createdBy: users[2]._id
      },{
        name: 'Fruit',
        language: 'Italian',
        cards: [{
          question: 'Apple',
          answer: 'Mela'
        },{
          question: 'Orange',
          answer: 'Arancia'
        },{
          question: 'Banana',
          answer: 'Banana'
        },{
          question: 'Cherry',
          answer: 'Ciliegia'
        },{
          question: 'Mango',
          answer: 'Mango'
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
