const router = require('express').Router();
const auth  = require('../controllers/auth');
const decks  = require('../controllers/decks');
const users  = require('../controllers/users');
const secureRoute = require('../lib/secureRoute');

router.route('/login')
  .post(auth.login);

router.route('/register')
  .post(auth.register);

router.route('/decks')
  .get(secureRoute, decks.index)
  .post(secureRoute, decks.create);

router.route('/decks/:id')
  .get(secureRoute, decks.show)
  .put(secureRoute, decks.update)
  .delete(secureRoute, decks.delete);

router.route('/decks/:id/favourite')
  .post(secureRoute, decks.favourite);

router.route('/users/:userId')
  .get(users.show);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
