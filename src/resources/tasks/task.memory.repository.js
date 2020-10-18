const DB = require('../../common/inMemoryDB');
const table = 'TASKS';

const getAll = async boardId => {
  const tasks = await DB.getAllSomething(table);
  if (!tasks) return [];
  return tasks.filter(task => task.boardId === boardId);
};

const get = async (boardId, taskId) => {
  const task = await DB.getSomething(table, taskId);
  if (!task || task.boardId !== boardId) {
    throw new Error(`Board id=${boardId} or task id=${taskId} not found`);
  }
  return task;
};

const create = async (boardId, taskData) => {
  return DB.createSomething(table, { ...taskData, boardId });
};

const update = async (taskId, taskData) => {
  await get(taskData.boardId, taskId);
  return DB.updateSomething(table, taskId, taskData);
};

const remove = async (boardId, taskId) => {
  const task = await DB.getSomething(table, taskId);
  if (!task) {
    throw new Error(`Task id=${taskId} not found`);
  }
  return DB.deleteSomething(table, taskId);
};

module.exports = { getAll, get, create, update, remove };
