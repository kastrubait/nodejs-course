const tasksRepo = require('./task.memory.repository');

const getAll = boardId => tasksRepo.getAll(boardId);

const get = id => tasksRepo.get(id);

const create = (boardId, task) => tasksRepo.create(boardId, task);

module.exports = { getAll, get, create };
