const DB = require('../../common/inMemoryDB');

const getAll = async () => DB.getAllBoards();

const add = async board => DB.addBoard(board);

const get = async boardId => {
  const board = DB.getBoard(boardId);
  if (!board) {
    throw new Error(`Board id=${boardId} was not found`);
  }
  return board;
};

const put = async (boardId, board) => {
  const findBoard = DB.getBoard(boardId);
  if (!findBoard) {
    throw new Error(`Board id=${boardId} was not found`);
  }
  return DB.putBoard(boardId, board);
};

const remove = async boardId => {
  const findBoard = DB.getBoard(boardId);
  if (!findBoard) {
    throw new Error(`Board id=${boardId} was not found`);
  }
  return DB.deleteBoard(boardId);
};

module.exports = { getAll, add, get, put, remove };
