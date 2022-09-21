const Sequelize = require('sequelize')
const db = require('./database.js')

const Event = db.define('event', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING,
    },
    tickets: {
      type: Sequelize.INTEGER,
    },
    startTime: {
      type: Sequelize.STRING,
    },
    endTime: {
      type: Sequelize.STRING,
    },
    location: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    img:{
      type: Sequelize.STRING,
    }
  })

  module.exports = Event