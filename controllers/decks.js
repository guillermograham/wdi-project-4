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

function decksShow(req, res, next) {
  Deck
    .findById(req.params.id)
    .exec()
    .then((deck) => {
      if(!deck) return res.notFound();
      res.json(deck);
    })
    .catch(next);
}

function decksUpdate(req, res, next) {
  Deck
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(deck => res.status(200).json(deck))
    .catch(next);
}

module.exports = {
  index: decksIndex,
  create: decksCreate,
  show: decksShow,
  update: decksUpdate
};
