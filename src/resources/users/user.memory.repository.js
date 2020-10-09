const DB = require('../../common/inMemoryDB');

const getAll = async () => DB.getAllUsers();

const get = async id => DB.getUser(id);

const create = async user => DB.createUser(user);

const put = async (id, user) => DB.putUser(id, user);

const delete1 = async id => DB.deleteUser(id);

module.exports = { getAll, get, create, put, delete1 };
