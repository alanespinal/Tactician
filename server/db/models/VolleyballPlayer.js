const Sequelize = require("sequelize");
const db = require("../db");

const VolleyballPlayer = db.define("volleyballPlayer", {
  position: {
    type: Sequelize.STRING,
  },
  xCoordinate: {
    type: Sequelize.INTEGER,
    defaultValue: 50,
  },
  yCoordinate: {
    type: Sequelize.INTEGER,
    defaultValue: 50,
  },
  color: {
    type: Sequelize.STRING,
  },
});

module.exports = VolleyballPlayer;
