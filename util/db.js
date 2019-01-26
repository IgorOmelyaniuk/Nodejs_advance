const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '5239763', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;