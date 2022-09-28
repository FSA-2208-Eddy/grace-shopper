// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require("./database");
const User = require("./User");
const Order = require("./Order");
const Tag = require("./Tag");
const LineItem = require("./LineItem");
const Event = require("./Event");
const axios = require("axios");
const API_KEY = "rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD";

User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(LineItem);
LineItem.belongsTo(Order);

LineItem.belongsToMany(Event, { through: "EventLine" });
Event.belongsToMany(LineItem, { through: "EventLine" });

Tag.belongsToMany(Event, { through: "EventTag" });
Event.belongsToMany(Tag, { through: "EventTag" });

module.exports = {
  // Include your models in this exports object as well!
  db,
  User,
  Order,
  Tag,
  LineItem,
  Event,
};
