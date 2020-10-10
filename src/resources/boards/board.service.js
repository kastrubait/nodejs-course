const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

const add = board => boardsRepo.add(board);

const get = id => boardsRepo.get(id);

const put = (id, board) => boardsRepo.put(id, board);

const remove = id => boardsRepo.remove(id);

module.exports = { getAll, add, get, put, remove };
