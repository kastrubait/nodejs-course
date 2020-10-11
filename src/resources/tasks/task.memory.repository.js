const DB = require('../../common/inMemoryDB');

const getAll = async boardId => {
  const board = DB.getBoard(boardId);
  if (!board) {
    throw new Error(`Board id=${boardId} was not found`);
  }
  return DB.getAllTasks(boardId);
};

const get = async (boardId, taskId) => {
  const board = DB.getBoard(boardId);
  if (!board) {
    throw new Error(`Board id=${boardId} was not found`);
  }
  return DB.getTask(taskId);
};

const create = async (boardId, taskData) => {
  const board = DB.getBoard(boardId);
  if (!board) {
    throw new Error(`Board id=${boardId} was not found`);
  }
  return DB.createTask({ ...taskData, boardId });
};

const put = async (boardId, taskId, taskData) => {
  const board = DB.getBoard(boardId);
  if (!board) {
    throw new Error(`Board id=${boardId} was not found`);
  }
  return DB.putTask(boardId, taskId, taskData);
};

const remove = async (boardId, taskId) => {
  const board = DB.getBoard(boardId);
  if (!board) {
    throw new Error(`Board id=${boardId} was not found`);
  }
  return DB.deleteTask(boardId, taskId);
};

module.exports = { getAll, get, create, put, remove };
