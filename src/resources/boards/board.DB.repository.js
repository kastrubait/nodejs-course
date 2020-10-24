const { Board } = require('./board.model');

const getAll = async () => {
  return Board.find({}).exec();
};

const add = async boardData => {
  return Board.create(boardData);
};

const get = async boardId => {
  const board = await Board.findById(boardId);
  return board !== null ? board : undefined;
};

const update = async (boardId, boardData) => {
  const isUpdate = (await Board.updateOne({ _id: boardId }, boardData)).ok;
  return isUpdate === 1 ? boardData : undefined;
};

const remove = async boardId => {
  const isDeleted = (await Board.deleteOne({ _id: boardId })).ok;
  return isDeleted;
};

module.exports = { getAll, add, get, update, remove };
