const DB = require('../../common/inMemoryDB');
const table = 'BOARDS';

const getAll = async () => DB.getAllSomething(table);

const add = async boardData => DB.createSomething(table, boardData);

const get = async boardId => {
  const board = DB.getSomething(table, boardId);
  if (!board) {
    throw new Error(`Board id=${boardId} not found`);
  }
  return board;
};

const update = async (boardId, boardData) => {
  const findBoard = DB.getSomething(table, boardId);
  if (!findBoard) {
    throw new Error(`Board id=${boardId} was not found`);
  }
  return DB.updateSomething(table, boardId, boardData);
};

const remove = async boardId => {
  const findBoard = DB.getSomething(table, boardId);
  if (!findBoard) {
    throw new Error(`Board id=${boardId} was not found`);
  }
  return DB.deleteBoard(boardId);
};

module.exports = { getAll, add, get, update, remove };
