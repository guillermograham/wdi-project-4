const mongoose = require('mongoose');
const bcrypt   = require('bcrypt');

const userSchema = mongoose.Schema({
  username: { type: String, required: 'Please enter a username' },
  email: { type: String, required: 'Please enter an email address' },
  password: { type: String, required: 'Please enter a password' },
  favourites: [{ type: mongoose.Schema.ObjectId, ref: 'Deck' }]
});

userSchema.virtual('myDecks', {
  ref: 'Deck',
  localField: '_id',
  foreignField: 'createdBy'
});

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function checkPassword(next) {
  if(this.isModified('password') && (!this._passwordConfirmation || this._passwordConfirmation !== this.password)) {
    this.invalidate('passwordConfirmation', 'Password confirmation does not match');
  }
  next();
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

// modifying the JSON output:
userSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
  }
});

module.exports = mongoose.model('User', userSchema);
