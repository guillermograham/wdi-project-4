const Deck = require('../models/deck');

function decksCreate(req, res, next) {
  Deck
    .create(req.body)
    .then(deck => res.status(201).json(deck))
    .catch(next);
}

module.exports = {
  create: decksCreate
};
