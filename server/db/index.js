// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require("./database");
const User = require("./User");
const Order = require("./Order");
const Tag = require("./Tag");
const LineItem = require("./LineItem");
const Event = require("./Event");

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });

    //use this area to seed your database
    const outdoorTag = await Tag.create({
      name: "outdoor recreation",
    });

    const musicTag = await Tag.create({
      name: "music",
    });
    await User.create({
      username: "Thomas",
      password: "testpassword",
      firstName: "Thomas",
      lastName: "Bak",
      email: "thomas@gmail.com",
      isAdmin: true,
    });

    const party = await Event.create({
      name: "Cathal's big birthday bash",
      type: "festival",
      tickets: 10000,
      startTime: new Date(),
      endTime: new Date(),
      location: "Ireland",
      description: "Come celebrate Cathal's big day!",
    });
    outdoorTag.addEvent(party);
    await Event.create({
      name: "The Strokes",
      type: "concert",
      tickets: 5000,
      startTime: new Date(),
      endTime: new Date(),
      location: "Los Angeles",
      description: "Come listen to Julian bless us with his gift",
    });

    await Order.create({
      userId: 1,
    });

    await Event.create({
      name: "Concert",
      location: "Place"
    })

    console.log(`Seeding successful!`);
  } catch (err) {
    console.log("problem seeding");
  }
};

User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(LineItem);
LineItem.belongsTo(Order);

LineItem.belongsToMany(Event, { through: "EventLine"});
Event.belongsToMany(LineItem, { through: "EventLine" });

Tag.belongsToMany(Event, { through: "EventTag" });
Event.belongsToMany(Tag, { through: "EventTag" });

module.exports = {
  // Include your models in this exports object as well!
  db,
  syncAndSeed,
  User,
  Order,
  Tag,
  LineItem,
  Event,
};
