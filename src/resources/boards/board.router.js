const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router
  .route('/')
  .post(async (req, res) => {
    try {
      const board = await boardsService.add(
        new Board({
          title: req.body.title,
          columns: req.body.columns
        })
      );
      res.json(Board.toResponse(board));
    } catch (e) {
      res.status(404).send(e.message);
    }
  })
  .get(async (req, res) => {
    try {
      const boards = await boardsService.getAll();
      res.json(boards.map(Board.toResponse));
    } catch (e) {
      res.status(404).send(e.message);
    }
  });

router
  .route('/:boardId')
  .get(async (req, res) => {
    try {
      const board = await boardsService.get(req.params.boardId);
      res.json(Board.toResponse(board));
    } catch (e) {
      res.status(404).send(e.message);
    }
  })
  .put(async (req, res) => {
    try {
      const board = await boardsService.update(req.params.boardId, req.body);
      res.json(Board.toResponse(board));
    } catch (e) {
      res.status(404).send(e.message);
    }
  })
  .delete(async (req, res) => {
    try {
      const boards = await boardsService.remove(req.params.boardId);
      res.json(boards.map(Board.toResponse));
    } catch (e) {
      res.status(404).send(e.message);
    }
  });

module.exports = router;
