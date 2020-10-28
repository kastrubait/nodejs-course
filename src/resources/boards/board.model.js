const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuid');

const Board = new Schema(
  {
    title: String,
    columns: {
      type: Array,
      default: []
    },
    _id: {
      type: String,
      default: uuid
    }
  },
  { collections: 'boards' }
);

const toResponse = board => {
  const { id, title, columns } = board;
  return { id, title, columns };
};

module.exports = {
  Board: mongoose.model('boards', Board),
  toResponse
};
