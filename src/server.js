const { processErrorLogger } = require('./middlewares/logger');

process
  .on('unhandledRejection', err => {
    const logger = processErrorLogger(err.message, 'Unhandled Rejection');
    const { exit } = process;
    logger.on('finish', () => exit(1));
  })
  .on('uncaughtException', err => {
    const logger = processErrorLogger(err.message, 'Uncaught Exception');
    const { exit } = process;
    logger.on('finish', () => exit(1));
  });

const { PORT } = require('./common/config');
const { connectToDB } = require('../DB/db');
const app = require('./app');

connectToDB(() => {
  app.listen(PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`)
  );
});
