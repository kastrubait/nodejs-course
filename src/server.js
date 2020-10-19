const { PORT } = require('./common/config');
const app = require('./app');

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

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
