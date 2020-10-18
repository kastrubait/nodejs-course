const { createLogger } = require('winston');

const { configConsole, configFile } = require('./configLogger');
const getLogRequest = require('../utils/getLogRequest');

const winstonConsole = createLogger(configConsole);
const winstonFile = createLogger(configFile);

const eventLogger = (req, res, next) => {
  const { inConsole, inFile } = getLogRequest(req);

  winstonConsole.log('info', inConsole);
  winstonFile.log('info', inFile);
  next();
};

const processErrorLogger = (message, errorType) => {
  const time = new Date().toUTCString();
  const errString = `${time} | ${errorType}: ${message}`;

  winstonConsole.log('error', errString);
  winstonFile.log('error', errString);
  return winstonFile;
};

module.exports = { eventLogger, processErrorLogger };
