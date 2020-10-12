const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

const add = boardData => boardsRepo.add(boardData);

const get = boardId => boardsRepo.get(boardId);

const update = (boardId, boardData) => boardsRepo.update(boardId, boardData);

const remove = boardId => boardsRepo.remove(boardId);

module.exports = { getAll, add, get, update, remove };
