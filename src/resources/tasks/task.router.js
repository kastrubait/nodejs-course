const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const tasksService = require('./task.service');

router
  .route('/:boardId/tasks')
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
      const task = await tasksService.create(req.params.boardId, req.body);
      res.json(Task.toResponse(task));
    } catch (e) {
      res.status(404).send(e.message);
    }
  });

router
  .route('/:id')
  .get(async (req, res) => {
    try {
      const task = await tasksService.get(req.params.boardId, req.params.id);
      res.json(Task.toResponse(task));
    } catch (e) {
      res.status(404).send(e.message);
    }
  })
  .put(async (req, res) => {
    try {
      const task = await tasksService.put(
        req.params.boardId,
        req.params.id,
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
        req.params.id
      );
      res.json(tasks.map(Task.toResponse));
    } catch (e) {
      res.status(404).send(e.message);
    }
  });

module.exports = router;
