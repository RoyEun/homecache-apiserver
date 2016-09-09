const db = require('./db');
const app = require('./server');
const logger = require('winston');

db.connect()
  .then(() => logger.info('Postgres connection Established...'))
  .then(() => app.listen(app.get('port'), app.get('ip')))
  .then(() => logger.info(`Listening on port ${app.get('port')} in ${app.get('env')} mode...`))
  .catch(logger.error);

const shutdown = function shutdown(msg, cb) {
  return function gracefulShutdown() {
    db.connection.close(() => {
      logger.info(`Postgres disconnected through ${msg}`);
      cb();
    });
  };
};

process.once('SIGUSR2', shutdown('Nodemon Restart', () => process.kill(process.pid, 'SIGUSR2')));
process.on('SIGINT', shutdown('App Termination', () => process.exit(0)));
process.on('SIGTERM', shutdown('Heroku App Termination', () => process.exit(0)));
