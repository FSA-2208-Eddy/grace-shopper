// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require("./database");
const User = require("./User");
const Order = require("./Order");
const Tag = require("./Tag");
const LineItem = require("./LineItem");
const Event = require("./Event");
const axios = require('axios')

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });

    const { data } = await axios.get('https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*')

    const makeSeatChart = () => {
      let seats = [];
      const alphabet = "ABCDEFGHIJ";
      for (let i = 0; i < alphabet.length; i++) {
        let current = alphabet[i];
        for (let j = 1; j <= 10; j++) {
          seats.push(`${current}${j}`);
        }
      }
      return seats;
    };

    for (let i = 0; i < data._embedded.events.length; i++) {
      const current = data._embedded.events[i];
      await Event.create({
        name: current.name,
        type: current.type,
        img: current.images[0].url,
        location: current._embedded.venues[0].name,
        startTime: `${current.dates.start.localDate} ${current.dates.start.localTime}`,
        endTime: current.dates.start.dateTime,
      })
    }
    console.log('Seeding Successful')
  }
  catch(err) {
    console.log(err)
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
