const { ErrorHandler } = require('../common/error');
const { NOT_FOUND, getStatusText } = require('http-status-codes');

// eslint-disable-next-line no-unused-vars
const handleNonExistentRoutes = (req, res, next) => {
  throw new ErrorHandler(NOT_FOUND, getStatusText(NOT_FOUND));
};

module.exports = handleNonExistentRoutes;
