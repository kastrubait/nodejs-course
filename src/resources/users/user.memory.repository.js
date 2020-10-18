const DB = require('../../common/inMemoryDB');
const table = 'USERS';

const getAll = async () => DB.getAllSomething(table);

const get = async userId => {
  const user = DB.getSomething(table, userId);
  if (!user) {
    throw new Error(`User id=${userId} not found`);
  }
  return user;
};

const create = async userData => DB.createSomething(table, userData);

const update = async (userId, userData) => {
  const userUpdete = DB.getSomething(table, userId);
  if (!userUpdete) {
    throw new Error(`User id=${userId} not found`);
  }
  const user = DB.updateSomething(table, userId, userData);
  return user;
};

const remove = async userId => {
  const user = DB.getSomething(table, userId);
  if (!user) {
    throw new Error(`User id=${userId} was not found`);
  }
  return DB.deleteUser(userId);
};

module.exports = { getAll, get, create, update, remove };
