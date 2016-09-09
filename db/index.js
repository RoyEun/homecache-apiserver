const Sequelize = require('sequelize');
const config = require('../config/environment');

console.log(config, 'config');

// Ask dennis how postgres is available from environment settings in the environment folder
// module.exports = new Sequelize(config.postgres.uri, userName, password);

module.exports = new Sequelize()
