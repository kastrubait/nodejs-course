const User = require('../resources/users/user.model');
// const Task = require('../resources/tasks/task.model');
const DB_USERS = [];
const DB_TASKS = [];

DB_USERS.push(new User(), new User(), new User(), new User());

const getAllUsers = async () => DB_USERS.slice(0);

const getAllTasks = async boardId =>
  DB_TASKS.filter(el => el.id === boardId)[0];

const getUser = async id => DB_USERS.filter(el => el.id === id)[0];

const getTask = async id => DB_TASKS.filter(el => el.id === id)[0];

const createUser = async user => {
  DB_USERS.push(user);
  return user;
};

const createTask = async (boardId, task) => {
  DB_TASKS.push(task);
  return task;
};

const putUser = async (id, user) => {
  const changePoz = DB_USERS.find(item => item.id === id);
  if (changePoz !== -1) {
    changePoz.login = user.login;
    changePoz.password = user.pasword;
    changePoz.name = user.name;
  }
  return user;
};

const deleteUser = async id => {
  const delPoz = DB_USERS.findIndex(item => item.id === id);
  if (delPoz !== -1) DB_USERS.splice(delPoz, 1);
  return DB_USERS.slice(0);
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  putUser,
  deleteUser,
  getAllTasks,
  getTask,
  createTask
};
