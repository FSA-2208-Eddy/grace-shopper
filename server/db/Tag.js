const Sequelize = require('sequelize')
const db = require('./database.js')

const Tag = db.define('tag', {
    name:{
      type: Sequelize.STRING,
    }
  })

  module.exports = Tag