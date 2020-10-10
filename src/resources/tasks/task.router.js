const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/:boardId').post(async (req, res) => {
  const task = await tasksService.create(
    req.params.boardId,
    new Task({
      title: req.body.title,
      order: req.body.order,
      description: req.body.description,
      userId: req.body.userId,
      boardId: req.params.boardId,
      columnId: req.body.column
    })
  );
  res.json(Task.toResponse(task));
});

router.route('/:id').get(async (req, res) => {
  const task = await tasksService.get(req.params.id);
  res.json(Task.toResponse(task));
});

module.exports = router;
