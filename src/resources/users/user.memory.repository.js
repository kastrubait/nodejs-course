const DB = require('../../common/inMemoryDB');

const getAll = async () => DB.getAllUsers();

const get = async userId => {
  const user = DB.getUser(userId);
  if (!user) {
    throw new Error(`User id=${userId} was not found`);
  }
  return user;
};

const create = async userData => DB.createUser(userData);

const update = async (userId, userData) => {
  const user = DB.updateUser(userId, userData);
  if (!user) {
    throw new Error(`User id=${userId} was not found`);
  }
  return user;
};

const remove = async userId => {
  const user = DB.getUser(userId);
  if (!user) {
    throw new Error(`User id=${userId} was not found`);
  }
  return DB.deleteUser(userId);
};

module.exports = { getAll, get, create, update, remove };
