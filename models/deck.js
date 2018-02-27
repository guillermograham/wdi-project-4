const mongoose = require('mongoose');

const deckSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  level: { type: String, required: true },
  language: { type: String, required: true },
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
