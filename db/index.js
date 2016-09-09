const Sequelize = require('sequelize');
const config = require('../config/environment');
const Promise = require('bluebird');

Sequelize.Promise = Promise;

// Ask dennis how postgres is available from environment settings in the environment folder
// module.exports = new Sequelize(config.postgres.uri, userName, password);

module.exports = new Sequelize();
