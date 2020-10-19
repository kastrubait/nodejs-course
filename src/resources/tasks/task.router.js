const router = require('express').Router({ mergeParams: true });
const { BAD_REQUEST, NOT_FOUND, getStatusText } = require('http-status-codes');
const Task = require('./task.model');
const tasksService = require('./task.service');
const { ErrorHandler, catchErrors } = require('../../common/error');
const { ERRORS, MESSAGES } = require('../../common/constants');

router
  .route('/')
  .get(
    catchErrors(async (req, res) => {
      const tasks = await tasksService.getAll(req.params.boardId);
      if (!tasks) {
        throw new ErrorHandler(BAD_REQUEST, getStatusText(BAD_REQUEST));
      }
      res.json(tasks.map(Task.toResponse));
    })
  )
  .post(
    catchErrors(async (req, res) => {
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
      if (!task) {
        throw new ErrorHandler(BAD_REQUEST, getStatusText(BAD_REQUEST));
      }
      res.json(Task.toResponse(task));
    })
  );

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
  .put(
    catchErrors(async (req, res) => {
      const task = await tasksService.update(req.params.taskId, req.body);
      res.json(Task.toResponse(task));
    })
  )
  .delete(
    catchErrors(async (req, res) => {
      const taskId = await tasksService.remove(
        req.params.boardId,
        req.params.taskId
      );
      if (!taskId) throw new ErrorHandler(NOT_FOUND, ERRORS.TASK_NOT_FOUND);
      res.status(204).send(MESSAGES.DELETE_TASK_SUCCESSFULL_MESSAGE);
    })
  );

module.exports = router;
