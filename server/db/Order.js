const Sequelize = require("sequelize");
const db = require("./database.js");

const Order = db.define("order", {
  isCart: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  address: {
    type: Sequelize.STRING,
  },
});

module.exports = Order;
