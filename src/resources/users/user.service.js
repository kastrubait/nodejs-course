const usersRepo = require('./user.DB.repository');

const getAll = () => usersRepo.getAll();

const get = userId => usersRepo.get(userId);

const create = userData => usersRepo.create(userData);

const update = (userId, userData) => usersRepo.update(userId, userData);

const remove = userId => usersRepo.remove(userId);

module.exports = { getAll, get, create, update, remove };
