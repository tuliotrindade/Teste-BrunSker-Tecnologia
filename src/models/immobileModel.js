const Sequelize = require("sequelize");
const database = require("../db");

const immobiles = database.define("immobiles", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cep: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  creator_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = immobiles;
