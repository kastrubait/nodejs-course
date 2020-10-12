const DB_USERS = [];
const DB_BOARDS = [];
let DB_TASKS = [];

const getAllUsers = async () => DB_USERS.slice(0);

const getAllBoards = async () => DB_BOARDS.slice(0);

const getAllTasks = async id => {
  const tasks = await DB_TASKS.slice(0);
  if (!tasks) return [];
  return tasks.filter(({ boardId }) => boardId === id);
};

const getUser = async userId => DB_USERS.filter(el => el.id === userId)[0];

const getBoard = async boardId => DB_BOARDS.filter(el => el.id === boardId)[0];

const getTask = async taskId => DB_TASKS.filter(el => el.id === taskId)[0];

const createUser = async user => {
  DB_USERS.push(user);
  return user;
};

const addBoard = async board => {
  DB_BOARDS.push(board);
  return board;
};

const createTask = async task => {
  DB_TASKS.push(task);
  return task;
};

const updateUser = async (userId, user) => {
  const changePoz = DB_USERS.find(item => item.id === userId);
  if (changePoz !== -1) {
    changePoz.login = user.login;
    changePoz.password = user.pasword;
    changePoz.name = user.name;
  }
  return user;
};

const updateTask = async (boardId, taskId, task) => {
  const changePoz = DB_TASKS.findIndex(item => item.id === taskId);
  if (changePoz !== -1) {
    const modified = { ...DB_TASKS[changePoz], ...task };
    DB_TASKS[changePoz] = modified;
  }
  return task;
};

const updateBoard = async (boardId, board) => {
  const changePoz = DB_BOARDS.find(item => item.id === boardId);
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

const deleteBoard = async boardId => {
  const delPozBoard = DB_BOARDS.findIndex(item => item.id === boardId);
  if (delPozBoard !== -1) {
    DB_TASKS = DB_TASKS.filter(item => item.boardId !== boardId);
    // DB_TASKS = DB_TASKS.reduce((newArray, item) => {
    //   return item.boardId === boardId ? newArray : [...newArray, item];
    // }, []);
    DB_BOARDS.splice(delPozBoard, 1);
  }
  return DB_BOARDS.slice(0);
};

const deleteTask = async (boardId, taskId) => {
  const delPozTask = DB_TASKS.findIndex(item => item.id === taskId);
  if (delPozTask !== -1) {
    DB_TASKS.splice(delPozTask, 1);
  }
  return DB_TASKS.slice(0);
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  getAllBoards,
  addBoard,
  getBoard,
  updateBoard,
  deleteBoard
};
