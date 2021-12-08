const Sequelize = require('sequelize');
const database = require('../db');
 
const immobiles = database.define(
  'immobiles',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
})
 
module.exports = immobiles;