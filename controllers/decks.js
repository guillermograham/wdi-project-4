const Deck = require('../models/deck');
const User = require('../models/user');

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
    .populate('favourites')
    .exec()
    .then((deck) => {
      if(!deck) return res.notFound();
      res.json(deck);
    })
    .catch(next);
}

function decksUpdate(req, res, next) {
  Deck
    .findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .then(deck => res.status(200).json(deck))
    .catch(next);
}

function decksDelete(req, res, next) {
  Deck
    .findByIdAndRemove(req.params.id)
    .then(() => res.status(204).end())
    .catch(next);
}

function decksFavourite(req, res, next) {
  User
    .findById(req.currentUser)
    .exec()
    .then((user) => {
      // check if favourite is already in user'
      if (user.favourites.indexOf(req.params.id)) {
        // removing of the id
        const index = user.favourites.indexOf(req.params.id);
        user.favourites.splice(index, 1);
      } else {
        // push the id in to the user.favourites
        user.favourites.push(req.params.id);
      }

      return user.save();
    })
    .then((user) => res.json(user))
    .catch(next);
}

module.exports = {
  index: decksIndex,
  create: decksCreate,
  show: decksShow,
  update: decksUpdate,
  delete: decksDelete,
  favourite: decksFavourite
};
