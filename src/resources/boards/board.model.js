const uuid = require('uuid');
// const Column = require('./column.model');

class Board {
  constructor({ id = uuid(), title = 'Title_BOARD', column = [] } = {}) {
    this.id = id;
    this.title = title;
    this.column = column;
  }

  static toResponse(board) {
    const { id, title, column } = board;
    return { id, title, column };
  }
}

module.exports = Board;
