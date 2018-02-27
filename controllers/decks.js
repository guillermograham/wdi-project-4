const Deck = require('../models/deck');

function decksIndex(req, res, next) {
  Deck
    .find()
    .exec()
    .then(decks => res.json(decks))
    .catch(next);
}

function decksCreate(req, res, next) {
  Deck
    .create(req.body)
    .then(deck => res.status(201).json(deck))
    .catch(next);
}

module.exports = {
  index: decksIndex,
  create: decksCreate
};
