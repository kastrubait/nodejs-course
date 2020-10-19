const router = require('express').Router();
const { BAD_REQUEST, NOT_FOUND, getStatusText } = require('http-status-codes');

const Board = require('./board.model');
const boardsService = require('./board.service');
const { ErrorHandler, catchErrors } = require('../../common/error');
const { ERRORS, MESSAGES } = require('../../common/constants');

router
  .route('/')
  .post(
    catchErrors(async (req, res) => {
      const board = await boardsService.add(
        new Board({
          title: req.body.title,
          columns: req.body.columns
        })
      );
      res.json(Board.toResponse(board));
    })
  )
  .get(
    catchErrors(async (req, res) => {
      const boards = await boardsService.getAll();
      res.json(boards.map(Board.toResponse));
    })
  );

router
  .route('/:boardId')
  .get(
    catchErrors(async (req, res) => {
      const board = await boardsService.get(req.params.boardId);
      if (!board) {
        throw new ErrorHandler(NOT_FOUND, ERRORS.BOARD_NOT_FOUND);
      }
      res.json(Board.toResponse(board));
    })
  )
  .put(
    catchErrors(async (req, res) => {
      const board = await boardsService.update(req.params.boardId, req.body);
      if (!board) {
        throw new ErrorHandler(BAD_REQUEST, getStatusText(BAD_REQUEST));
      }
      res.json(Board.toResponse(board));
    })
  )
  .delete(
    catchErrors(async (req, res) => {
      const board = await boardsService.remove(req.params.boardId);
      if (!board) {
        throw new ErrorHandler(NOT_FOUND, ERRORS.BOARD_NOT_FOUND);
      }
      res.status(204).send(MESSAGES.DELETE_BOARD_SUCCESSFULL_MESSAGE);
    })
  );

module.exports = router;
