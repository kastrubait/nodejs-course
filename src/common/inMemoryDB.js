const DB = {
  USERS: [],
  BOARDS: [],
  TASKS: []
};

const getAllSomething = async table => {
  // DB[table].slice(0);
  return DB[table].filter(element => element);
};

const getSomething = async (table, someId) =>
  DB[table].filter(el => el.id === someId)[0];

const createSomething = async (table, data) => {
  DB[table].push(data);
  return data;
};

const updateSomething = async (table, someId, data) => {
  const changePoz = DB[table].findIndex(item => item.id === someId);
  if (changePoz !== -1) {
    const modified = { ...DB[table][changePoz], ...data };
    DB[table][changePoz] = modified;
  }
  return data;
};

const deleteSomething = async (table, someId) => {
  const delPoz = DB[table].findIndex(item => item.id === someId);
  if (delPoz !== -1) {
    DB[table].splice(delPoz, 1);
  }
  return someId;
};

const deleteUser = async userId => {
  const delPoz = DB.USERS.findIndex(el => el.id === userId);
  if (delPoz !== -1) {
    DB.TASKS.map(item => {
      if (item.userId === userId) item.userId = null;
    });
    DB.USERS.splice(delPoz, 1);
  }
  return DB.USERS.slice(0);
};

const deleteBoard = async boardId => {
  const delPozBoard = DB.BOARDS.findIndex(item => item.id === boardId);
  if (delPozBoard !== -1) {
    DB.TASKS = DB.TASKS.filter(item => item.boardId !== boardId);
    // DB_TASKS = DB_TASKS.reduce((newArray, item) => {
    //   return item.boardId === boardId ? newArray : [...newArray, item];
    // }, []);
    DB.BOARDS.splice(delPozBoard, 1);
  }
  return DB.BOARDS.slice(0);
};

module.exports = {
  getAllSomething,
  getSomething,
  createSomething,
  updateSomething,
  deleteSomething,
  deleteUser,
  deleteBoard
};
