const router = require('express').Router();
const { BAD_REQUEST, NOT_FOUND, getStatusText } = require('http-status-codes');

const User = require('./user.model');
const usersService = require('./user.service');
const { ErrorHandler, catchErrors } = require('../../common/error');
const { ERRORS, MESSAGES } = require('../../common/constants');

router
  .route('/')
  .get(
    catchErrors(async (req, res) => {
      const users = await usersService.getAll();
      res.json(users.map(User.toResponse));
    })
  )
  .post(
    catchErrors(async (req, res) => {
      // const { name, login, password } = req.body;
      // if (name && login && password) {
      const user = await usersService.create(
        new User({
          login: req.body.login,
          name: req.body.name,
          password: req.body.password
        })
      );
      res.json(User.toResponse(user));
      // } else {
      //   throw new ErrorHandler(BAD_REQUEST, getStatusText(BAD_REQUEST));
      // }
    })
  );

router
  .route('/:userId')
  .get(
    catchErrors(async (req, res) => {
      const { userId } = req.params;
      const user = await usersService.get(userId);
      if (!user) {
        throw new ErrorHandler(NOT_FOUND, ERRORS.USER_NOT_FOUND);
      }
      res.json(User.toResponse(user));
    })
  )
  .put(
    catchErrors(async (req, res) => {
      const { userId } = req.params;
      const user = req.body;
      const userUpdate = await usersService.update(userId, user);
      if (!userUpdate) {
        throw new ErrorHandler(BAD_REQUEST, getStatusText(BAD_REQUEST));
      }
      res.json(User.toResponse(userUpdate));
    })
  )
  .delete(
    catchErrors(async (req, res) => {
      const { userId } = req.params;
      const users = await usersService.remove(userId);
      if (!users) {
        throw new ErrorHandler(NOT_FOUND, ERRORS.USER_NOT_FOUND);
      }
      res.status(204).send(MESSAGES.DELETE_USER_SUCCESSFULL_MESSAGE);
    })
  );

module.exports = router;
