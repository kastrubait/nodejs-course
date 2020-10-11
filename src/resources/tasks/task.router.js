const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const tasksService = require('./task.service');

router
  .route('/')
  .get(async (req, res) => {
    try {
      const tasks = await tasksService.getAll(req.params.boardId);
      res.json(tasks.map(Task.toResponse));
    } catch (e) {
      res.status(404).send(e.message);
    }
  })
  .post(async (req, res) => {
    try {
      const task = await tasksService.create(
        req.params.boardId,
        new Task({
          title: req.body.title,
          order: req.body.order,
          description: req.body.description,
          userId: null,
          columnId: null
        })
      );
      res.json(Task.toResponse(task));
    } catch (e) {
      res.status(404).send(e.message);
    }
  });

router
  .route('/:taskId')
  .get(async (req, res) => {
    try {
      const task = await tasksService.get(
        req.params.boardId,
        req.params.taskId
      );
      res.json(Task.toResponse(task));
    } catch (e) {
      res.status(404).send(e.message);
    }
  })
  .put(async (req, res) => {
    try {
      const task = await tasksService.put(
        req.params.boardId,
        req.params.taskId,
        req.body
      );
      res.json(Task.toResponse(task));
    } catch (e) {
      res.status(404).send(e.message);
    }
  })
  .delete(async (req, res) => {
    try {
      const tasks = await tasksService.remove(
        req.params.boardId,
        req.params.taskId
      );
      res.json(tasks.map(Task.toResponse));
    } catch (e) {
      res.status(404).send(e.message);
    }
  });

module.exports = router;
