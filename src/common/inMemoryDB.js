const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Column = require('../resources/columns/column.model');
// const Task = require('../resources/tasks/task.model');
const DB_USERS = [];
const DB_BOARDS = [];
const DB_COLUMNS = [];
const DB_TASKS = [];

DB_USERS.push(new User(), new User(), new User(), new User());
DB_BOARDS.push(new Board());
DB_COLUMNS.push(new Column(), new Column(), new Column());

const getAllUsers = async () => DB_USERS.slice(0);

const getAllBoards = async () => DB_BOARDS.slice(0);

const getAllColumns = async () => DB_COLUMNS.slice(0);

const getAllTasks = async boardId =>
  DB_TASKS.filter(el => el.id === boardId)[0];

const getUser = async id => DB_USERS.filter(el => el.id === id)[0];

const getBoard = async id => DB_BOARDS.filter(el => el.id === id)[0];

const getTask = async id => DB_TASKS.filter(el => el.id === id)[0];

const createUser = async user => {
  DB_USERS.push(user);
  return user;
};

const addBoard = async board => {
  DB_BOARDS.push(board);
  return board;
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

const putBoard = async (id, board) => {
  const changePoz = DB_BOARDS.find(item => item.id === id);
  if (changePoz !== -1) {
    changePoz.title = board.title;
    changePoz.column = board.column;
  }
  return board;
};

const deleteUser = async id => {
  const delPoz = DB_USERS.findIndex(item => item.id === id);
  if (delPoz !== -1) DB_USERS.splice(delPoz, 1);
  return DB_USERS.slice(0);
};

const removeBoard = async id => {
  const delPoz = DB_BOARDS.findIndex(item => item.id === id);
  if (delPoz !== -1) DB_BOARDS.splice(delPoz, 1);
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  putUser,
  deleteUser,
  getAllTasks,
  getTask,
  createTask,
  getAllBoards,
  addBoard,
  getBoard,
  putBoard,
  removeBoard,
  getAllColumns
};
