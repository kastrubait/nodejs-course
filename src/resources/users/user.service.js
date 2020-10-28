const usersRepo = require('./user.DB.repository');
const tasksRepo = require('../tasks/task.DB.repository');

const getAll = async () => await usersRepo.getAll();

const get = async userId => await usersRepo.get(userId);

const create = async userData => await usersRepo.create(userData);

const update = async (userId, userData) =>
  await usersRepo.update(userId, userData);

const remove = async userId => {
  const getAllTask = await tasksRepo.getAll();
  const tasks = getAllTask.filter(task => task.userId === userId);
  for (const task of tasks) {
    await tasksRepo.update(task.id, { ...task, userId: null });
  }
  const isDel = await usersRepo.remove(userId);
  return isDel;
};

module.exports = { getAll, get, create, update, remove };
