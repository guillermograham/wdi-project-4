const mongoose = require('mongoose');

const deckSchema = mongoose.Schema({
  name: { type: String, required: 'Please provide a name' },
  image: String,
  level: { type: String, required: 'Please state the difficulty level' },
  language: { type: String, required: 'Please state the language' },
  cards: [],
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

// modifying the JSON output:
deckSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
  }
});

module.exports = mongoose.model('Deck', deckSchema);
