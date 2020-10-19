const tasksRepo = require('./task.memory.repository');

const getAll = async boardId => tasksRepo.getAll(boardId);

const get = async (boardId, taskId) => tasksRepo.get(boardId, taskId);

const create = async (boardId, taskData) => tasksRepo.create(boardId, taskData);

const update = async (taskId, taskData) => tasksRepo.update(taskId, taskData);

const remove = async (boardId, taskId) => tasksRepo.remove(boardId, taskId);

module.exports = { getAll, get, create, update, remove };
