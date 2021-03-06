const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuid');

const User = new Schema(
  {
    name: String,
    login: String,
    password: String,
    _id: {
      type: String,
      default: uuid
    }
  },
  { collections: 'users' }
);

const toResponse = user => {
  const { id, name, login, password } = user;
  return { id, name, login, password };
};

module.exports = {
  User: mongoose.model('users', User),
  toResponse
};
