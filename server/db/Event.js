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
      defaultValue: 'https://cdn.choosechicago.com/uploads/2019/06/festivals-events-1800x900.jpg'
    },
    price: {
      type: Sequelize.FLOAT,
      defaultValue: 0.0,
    }
  })

  module.exports = Event