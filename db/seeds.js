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
        deckName: 'Pizza Night',
        description: 'Let\'s ignore this Valentine-guy and eat pizza!',
        date: 'Feb 14, 2018',
        location: {
          firstLine: '119 Drayton Rd',
          secondLine: '',
          city: 'London',
          postal_code: 'NW10 4DH',
          lat: 51.54035,
          lng: -0.24488
        },
        image: 'https://images.unsplash.com/photo-1509403491765-9fb9d773ca6d?ixlib=rb-0.3.5&s=7384d4b273bc43324d89f08f92d818ae&auto=format&fit=crop&w=1036&q=80',
        deckKey: 809362,
        guests: [users[1]._id, users[3]._id],
        items: [ {
          itemName: 'pizza',
          amount: 'many',
          bringer: null,
          createdBy: users[2]._id
        }, {
          itemName: 'extra ketchup',
          amount: '',
          bringer: null,
          createdBy: users[2]._id
        } ],
        comments: [{
          content: 'I\'m waiting for it',
          createdBy: users[1]._id
        }],
        createdBy: users[2]._id,
        photos: []
      }, {
        deckName: 'LOTR (director\'s cut) Marathon',
        description: 'The very best way to spend a weekend',
        date: 'March 10, 2018',
        location: {
          firstLine: '119 Drayton Rd',
          secondLine: '',
          city: 'London',
          postal_code: 'NW10 4DH',
          lat: 51.54035,
          lng: -0.24488
        },
        image: 'https://cdn.vox-cdn.com/thumbor/nRu2ccLSeYke8-EGrIi1ohMDLdI=/0x0:825x464/1200x800/filters:focal(347x166:479x298)/cdn.vox-cdn.com/uploads/chorus_image/image/57584235/DOiAi2WUEAE3A1Y.0.jpg',
        deckKey: 876562,
        guests: [users[1]._id, users[3]._id],
        items: [ {
          itemName: 'pop-corn',
          amount: 'plenty',
          bringer: null,
          createdBy: users[2]._id
        }, {
          itemName: 'crisps',
          amount: '',
          bringer: [users[1]._id],
          createdBy: users[2]._id
        }, {
          itemName: 'cokes',
          amount: '2 packs',
          bringer: [users[2]._id],
          createdBy: users[2]._id
        }, {
          itemName: 'ice-cream',
          amount: '1 bucket',
          bringer: [users[3]._id],
          createdBy: users[1]._id
        }, {
          itemName: 'coffee',
          amount: '2 big cups',
          bringer: [users[1]._id],
          createdBy: users[1]._id
        } ],
        comments: [{
          content: 'Hobbit marathon next week?',
          createdBy: users[3]._id
        }, {
          content: 'Uh, that would be tough :P',
          createdBy: users[1]._id
        }],
        createdBy: users[2]._id,
        photos: []
      }, {
        deckName: 'Pair Programming',
        description: 'Do some coding',
        date: 'Feb 25, 2018',
        location: {
          firstLine: 'British Library',
          secondLine: '',
          city: 'London',
          postal_code: 'NW1 2DB',
          lat: 51.52998,
          lng: -0.12701
        },
        image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-0.3.5&s=4f097d97eeacf635a30c2f61f783aa92&auto=format&fit=crop&w=1066&q=80',
        deckKey: 802262,
        guests: [users[2]._id],
        items: [ {
          itemName: 'chargers',
          amount: 'many',
          bringer: null,
          createdBy: users[3]._id
        }, {
          itemName: 'coffee',
          amount: 'for 2',
          bringer: users[2]._id,
          createdBy: users[2]._id
        } ],
        comments: [{
          content: 'Just don\'t git push without me!',
          createdBy: users[2]._id
        }],
        createdBy: users[3]._id,
        photos: []
      }, {
        deckName: 'Picnic',
        description: 'A lovely gathering to open this season. I\'m looking forward to it soooo much!',
        date: 'May 5, 2018',
        location: {
          firstLine: 'Victoria Park',
          secondLine: 'at the Pavilion',
          city: 'London',
          postal_code: 'E9 7DE',
          lat: 51.53345,
          lng: -0.04193
        },
        image: 'https://images.unsplash.com/photo-1455734729978-db1ae4f687fc?ixlib=rb-0.3.5&s=969e43bff2d6e807b261faff8b9ddd51&auto=format&fit=crop&w=1050&q=80',
        deckKey: 802162,
        guests: [users[1]._id, users[2]._id],
        items: [ {
          itemName: 'fruits',
          amount: '',
          bringer: null,
          createdBy: users[0]._id
        }, {
          itemName: 'napkins',
          amount: '2 packs',
          bringer: users[2]._id,
          createdBy: users[0]._id
        }, {
          itemName: 'sun-cream',
          amount: '',
          bringer: users[2]._id,
          createdBy: users[0]._id
        }, {
          itemName: 'scones',
          amount: 'many',
          bringer: null,
          createdBy: users[0]._id
        }, {
          itemName: 'cream',
          amount: '',
          bringer: null,
          createdBy: users[0]._id
        }, {
          itemName: 'jam',
          amount: '',
          bringer: null,
          createdBy: users[0]._id
        }, {
          itemName: 'bread',
          amount: '',
          bringer: null,
          createdBy: users[0]._id
        }, {
          itemName: 'spreads',
          amount: '',
          bringer: null,
          createdBy: users[0]._id
        }, {
          itemName: 'cucumbers',
          amount: '',
          bringer: null,
          createdBy: users[0]._id
        }, {
          itemName: 'tomatos',
          amount: '',
          bringer: null,
          createdBy: users[0]._id
        }, {
          itemName: 'cheese',
          amount: '',
          bringer: null,
          createdBy: users[0]._id
        }, {
          itemName: 'utensils',
          amount: '',
          bringer: users[0]._id,
          createdBy: users[0]._id
        }, {
          itemName: 'blankets',
          amount: '',
          bringer: users[0]._id,
          createdBy: users[0]._id
        } ],
        comments: [{
          content: 'I\'m counting the days until it!',
          createdBy: users[1]._id
        }, {
          content: '<3',
          createdBy: users[0]._id
        }],
        createdBy: users[0]._id,
        photos: []
      } ]);
  })
  .then((decks) => {
    // console.log(decks);
    console.log(`${decks.length} decks created`);
  })
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
