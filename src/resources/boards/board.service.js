const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

const add = board => boardsRepo.add(board);

const get = boardId => boardsRepo.get(boardId);

const put = (boardId, board) => boardsRepo.put(boardId, board);

const remove = boardId => boardsRepo.remove(boardId);

module.exports = { getAll, add, get, put, remove };
