const { Schema, model } = require('mongoose');

const ContactSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  birthday: Date,
  photo: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = model('Contact', ContactSchema);