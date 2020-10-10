const DB = require('../../common/inMemoryDB');

const getAll = async () => DB.getAllBoards();

const add = async board => DB.addBoard(board);

const get = async id => DB.getBoard(id);

const put = async (id, board) => DB.putBoard(id, board);

const remove = async id => DB.removeBoard(id);

module.exports = { getAll, add, get, put, remove };
