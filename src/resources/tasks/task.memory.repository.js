const DB = require('../../common/inMemoryDB');

const getAll = async boardId => DB.getAllTask(boardId);

const get = async id => DB.getTask(id);

const create = async (boardId, task) => DB.createUser(boardId, task);

module.exports = { getAll, get, create };
