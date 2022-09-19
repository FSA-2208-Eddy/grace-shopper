const Sequelize = require('sequelize')
const db = require('./database.js')

const LineItem = db.define('lineitem', {
    qty: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    seat: {
        type: Sequelize.STRING,
    }
  })

  module.exports = LineItem