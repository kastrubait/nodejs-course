const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const get = userId => usersRepo.get(userId);

const create = userData => usersRepo.create(userData);

const put = (userId, userData) => usersRepo.put(userId, userData);

const remove = userId => usersRepo.remove(userId);

module.exports = { getAll, get, create, put, remove };
