const db = require("./database");
const User = require("./User");
const Order = require("./Order");
const Tag = require("./Tag");
const LineItem = require("./LineItem");
const Event = require("./Event");
const axios = require('axios')
const API_KEY = 'rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD'

User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(LineItem);
LineItem.belongsTo(Order);

LineItem.belongsToMany(Event, { through: "EventLine"});
Event.belongsToMany(LineItem, { through: "EventLine" });

Tag.belongsToMany(Event, { through: "EventTag" });
Event.belongsToMany(Tag, { through: "EventTag" });

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });

    const { data } = await axios.get(`https://app.ticketmaster.com/discovery/v2/events?apikey=${API_KEY}&locale=*&size=200&sort=random&city=chicago`)


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

    const sports = await Tag.create({name: 'Sports'})
    const music = await Tag.create({name: 'Music'})
    const artsAndTheatre = await Tag.create({name: 'Arts & Theatre'})
    const misc = await Tag.create({name: 'Misc'})

    for (let i = 0; i < data._embedded.events.length; i++) {
      const current = data._embedded.events[i];
      const newEvent = await Event.create({
        name: current.name,
        type: current.type,
        img: current.images[0].url,
        location: current._embedded.venues[0].name,
        startTime: `${current.dates.start.localDate} ${current.dates.start.localTime}`,
        endTime: current.dates.start.dateTime,
      })

      current.classifications[0].segment.name === 'Sports' && current.classifications[0].segment.name
      ? newEvent.addTag(sports) : current.classifications[0].segment.name === 'Music' && current.classifications[0].segment.name
      ? newEvent.addTag(music) : current.classifications[0].segment.name === 'Arts & Theatre' && current.classifications[0].segment.name
      ? newEvent.addTag(artsAndTheatre) : newEvent.addTag(misc)

    }
    console.log('Seeding Successful')
  }
  catch(err) {
    console.log(err)
  }
};

syncAndSeed();