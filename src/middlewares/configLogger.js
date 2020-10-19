const { format, transports } = require('winston');
const path = require('path');

const configConsole = {
  format: format.combine(format.colorize(), format.cli()),
  transports: [new transports.Console()]
};

const configFile = {
  format: format.json(),
  transports: [
    new transports.File({
      level: 'info',
      filename: path.join(__dirname, '../../logs/requests.log'),
      handleExceptions: true,
      maxsize: 5242880,
      maxFiles: 5,
      colorize: false
    }),
    new transports.File({
      level: 'error',
      filename: path.join(__dirname, '../../logs/errors.log'),
      handleExceptions: true,
      maxsize: 5242880,
      maxFiles: 5,
      colorize: false
    })
  ]
};

module.exports = { configConsole, configFile };
