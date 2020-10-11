const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
// const Column = require('../resources/columns/column.model');
// const Task = require('../resources/tasks/task.model');
const DB_USERS = [];
const DB_BOARDS = [];
// const DB_COLUMNS = [];
const DB_TASKS = [];

DB_USERS.push(new User());
DB_BOARDS.push(new Board());
// DB_COLUMNS.push(new Column(), new Column(), new Column());

const getAllUsers = async () => DB_USERS.slice(0);

const getAllBoards = async () => DB_BOARDS.slice(0);

// const getAllColumns = async () => DB_COLUMNS.slice(0);

const getAllTasks = async boardId =>
  DB_TASKS.filter(el => el.boardId === boardId)[0];

const getUser = async userId => DB_USERS.filter(el => el.id === userId)[0];

const getBoard = async id => DB_BOARDS.filter(el => el.id === id)[0];

const getTask = async (boardId, id) =>
  DB_TASKS.filter(el => el.id === id && el.boardId === boardId)[0];

const createUser = async user => {
  DB_USERS.push(user);
  return user;
};

const addBoard = async board => {
  DB_BOARDS.push(board);
  return board;
};

const createTask = async (boardId, task) => {
  const changePoz = DB_BOARDS.find(item => item.id === boardId);
  if (changePoz !== -1) {
    DB_TASKS.push(task);
    return task;
  }
};

const putUser = async (userId, user) => {
  const changePoz = DB_USERS.find(item => item.id === userId);
  if (changePoz !== -1) {
    changePoz.login = user.login;
    changePoz.password = user.pasword;
    changePoz.name = user.name;
  }
  return user;
};

const putTask = async (boardId, id, task) => {
  const changePoz = DB_TASKS.findIndex(item => item.id === id);
  if (changePoz !== -1) {
    const modified = { ...DB_TASKS[changePoz], ...task };
    DB_TASKS[changePoz] = modified;
  }
  return task;
};

const putBoard = async (id, board) => {
  const changePoz = DB_BOARDS.find(item => item.id === id);
  if (changePoz !== -1) {
    changePoz.title = board.title;
    changePoz.column = board.column;
  }
  return board;
};

const deleteUser = async userId => {
  const delPoz = DB_USERS.findIndex(el => el.id === userId);
  if (delPoz !== -1) {
    DB_TASKS.map(item => {
      if (item.userId === userId) item.userId = null;
    });
    DB_USERS.splice(delPoz, 1);
  }
  return DB_USERS.slice(0);
};

const deleteBoard = async id => {
  const delPoz = DB_BOARDS.findIndex(item => item.id === id);
  if (delPoz !== -1) {
    DB_TASKS.reduce((newArray, item) => {
      return item.boardId === id ? newArray : [...newArray, item];
    }, []);
    DB_BOARDS.splice(delPoz, 1);
  }
  return DB_BOARDS.slice(0);
};

const deleteTask = async (boardId, id) => {
  const delPoz = DB_TASKS.findIndex(item => item.id === id);
  if (delPoz !== -1) {
    DB_TASKS.splice(delPoz, 1);
  }
  return DB_TASKS.slice(0);
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
  putTask,
  deleteTask,
  getAllBoards,
  addBoard,
  getBoard,
  putBoard,
  deleteBoard
  // getAllColumns
};
