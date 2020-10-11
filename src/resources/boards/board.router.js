const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router
  .route('/')
  .post(async (req, res) => {
    const board = await boardsService.add(
      new Board({
        title: req.body.title,
        column: req.body.column
      })
    );
    res.json(Board.toResponse(board));
  })

  .get(async (req, res) => {
    const boards = await boardsService.getAll();
    res.json(boards.map(Board.toResponse));
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const board = await boardsService.get(req.params.id);
    res.json(Board.toResponse(board));
  })
  .put(async (req, res) => {
    const board = await boardsService.put(req.params.id, req.body);
    res.json(Board.toResponse(board));
  })
  .delete(async (req, res) => {
    const boards = await boardsService.remove(req.params.id);
    res.json(boards.map(Board.toResponse));
  });

module.exports = router;
