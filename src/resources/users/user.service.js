const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const get = id => usersRepo.get(id);

const create = user => usersRepo.create(user);

const put = (id, user) => usersRepo.put(id, user);

const delete1 = id => usersRepo.delete1(id);

module.exports = { getAll, get, create, put, delete1 };
