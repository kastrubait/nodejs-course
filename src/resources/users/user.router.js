const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router
  .route('/')
  .get(async (req, res) => {
    const users = await usersService.getAll();
    res.json(users.map(User.toResponse));
  })
  .post(async (req, res) => {
    const user = await usersService.create(
      new User({
        login: req.body.login,
        password: req.body.password,
        name: req.body.name
      })
    );
    res.json(User.toResponse(user));
  });

router
  .route('/:id')
  .get(async (req, res) => {
    try {
      const user = await usersService.get(req.params.id);
      res.json(User.toResponse(user));
    } catch (e) {
      res.status(404).send(e.message);
    }
  })
  .put(async (req, res) => {
    try {
      const user = await usersService.put(req.params.id, req.body);
      res.json(User.toResponse(user));
    } catch (e) {
      res.status(404).send(e.message);
    }
  })
  .delete(async (req, res) => {
    try {
      const users = await usersService.remove(req.params.id);
      res.json(users.map(User.toResponse));
    } catch (e) {
      res.status(404).send(e.message);
    }
  });

module.exports = router;
