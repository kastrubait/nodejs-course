const User = require('../resources/users/user.model');
const DB = [];

DB.push(new User(), new User(), new User(), new User());

const getAllUsers = async () => DB.slice(0);

const getUser = async id => DB.filter(el => el.id === id)[0];

const createUser = async user => {
  DB.push(user);
  return user;
};

const putUser = async (id, user) => {
  const changePoz = DB.find(item => item.id === id);
  if (changePoz !== -1) {
    changePoz.login = user.login;
    changePoz.password = user.pasword;
    changePoz.name = user.name;
    //  DB.splice(delPoz, 1);
  }
  return user;
};

const deleteUser = async id => {
  const delPoz = DB.findIndex(item => item.id === id);
  if (delPoz !== -1) DB.splice(delPoz, 1);
  return DB.slice(0);
};

module.exports = { getAllUsers, getUser, createUser, putUser, deleteUser };
