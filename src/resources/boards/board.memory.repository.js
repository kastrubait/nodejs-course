const DB = require('../../common/inMemoryDB');

const getAll = async () => DB.getAllBoards();

const add = async boardData => DB.addBoard(boardData);

const get = async boardId => {
  const board = DB.getBoard(boardId);
  if (!board) {
    throw new Error(`Board id=${boardId} was not found`);
  }
  return board;
};

const update = async (boardId, boardData) => {
  const findBoard = DB.getBoard(boardId);
  if (!findBoard) {
    throw new Error(`Board id=${boardId} was not found`);
  }
  return DB.updateBoard(boardId, boardData);
};

const remove = async boardId => {
  const findBoard = DB.getBoard(boardId);
  if (!findBoard) {
    throw new Error(`Board id=${boardId} was not found`);
  }
  return DB.deleteBoard(boardId);
};

module.exports = { getAll, add, get, update, remove };
