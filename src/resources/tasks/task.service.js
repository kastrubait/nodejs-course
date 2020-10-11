const tasksRepo = require('./task.memory.repository');

const getAll = async boardId => tasksRepo.getAll(boardId);

const get = async (boardId, taskId) => tasksRepo.get(boardId, taskId);

const create = async (boardId, taskData) => tasksRepo.create(boardId, taskData);

const put = async (boardId, taskId, userData) =>
  tasksRepo.put(boardId, taskId, userData);

const remove = async (boardId, taskId) => tasksRepo.remove(boardId, taskId);

module.exports = { getAll, get, create, put, remove };
