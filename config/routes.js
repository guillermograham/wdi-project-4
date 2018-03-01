const router = require('express').Router();
const auth  = require('../controllers/auth');
const decks  = require('../controllers/decks');


router.route('/login')
  .post(auth.login);

router.route('/register')
  .post(auth.register);

router.route('/decks')
  .get(decks.index)
  .post(decks.create);

router.route('/decks/:id')
  .get(decks.show)
  .put(decks.update);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
