const db = require('./db');
const app = require('./server');
const logger = require('winston');
const Sequelize = require('sequelize');
const config = require('./config/environment');


// Ask dennis how postgres is available from environment settings in the environment folder
// module.exports = new Sequelize(config.postgres.uri, userName, password);

// const db = new Sequelize();
//   .then(() => logger.info('Postgres connection Established...'))
//   .then(() => app.listen(app.get('port'), app.get('ip')))
//   .then(() => logger.info(`Listening on port ${app.get('port')} in ${app.get('env')} mode...`))
//   .catch(logger.error);

app.listen(app.get('port'), app.get('ip'), () => {
  logger.info(`Listening on port ${app.get('port')} in ${app.get('env')} mode...`);
});

// const shutdown = function shutdown(msg, cb) {
//   return function gracefulShutdown() {
//     db.connection.close(() => {
//       logger.info(`Postgres disconnected through ${msg}`);
//       cb();
//     });
//   };
// };
//
// process.once('SIGUSR2', shutdown('Nodemon Restart', () => process.kill(process.pid, 'SIGUSR2')));
// process.on('SIGINT', shutdown('App Termination', () => process.exit(0)));
// process.on('SIGTERM', shutdown('Heroku App Termination', () => process.exit(0)));
