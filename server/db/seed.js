const db = require("./database");
const User = require("./User");
const Order = require("./Order");
const Tag = require("./Tag");
const LineItem = require("./LineItem");
const Event = require("./Event");
const axios = require("axios");
const apiCalls = require("./apiCalls");
const API_KEY = "rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD";

User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(LineItem);
LineItem.belongsTo(Order);

LineItem.belongsToMany(Event, { through: "EventLine" });
Event.belongsToMany(LineItem, { through: "EventLine" });

Tag.belongsToMany(Event, { through: "EventTag" });
Event.belongsToMany(Tag, { through: "EventTag" });

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });

    // const { data } = await axios.get(`https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&keyword=new%20york&locale=*&includeTBA=no&includeTBD=no&includeTest=no&size=200`)

    const makeSeatChart = () => {
      let seats = [];
      const alphabet = "ABCDEFGHIJ";
      for (let i = 0; i < alphabet.length; i++) {
        let current = alphabet[i];
        for (let j = 1; j <= 12; j++) {
          seats.push(`${current}${j}`);
        }
      }
      return seats;
    };

    const sports = await Tag.create({ name: "Sports" });
    const music = await Tag.create({ name: "Music" });
    const artsAndTheatre = await Tag.create({ name: "Arts & Theatre" });
    const misc = await Tag.create({ name: "Misc" });

    let myPromise = () =>
      new Promise((resolve, reject) => {
        setTimeout(function () {
          resolve("Count");
        }, 100);
      });

    let namesObj = {};

    for (let i = 0; i < apiCalls.length; i++) {
      for (let key in apiCalls[i]) {
        if (Number(key) % 2 === 0 && Number(key) !== 0) {
          const timer = await myPromise();
          console.log(timer);
        }
        const { data } = await axios.get(apiCalls[i][key]);
        let previous;

        for (let i = 0; i < data._embedded.events.length; i++) {
          const current = data._embedded.events[i];

          if (current.name.includes("TBA")) continue;
          if (!current.priceRanges) continue;

          if (namesObj[current.name]) {
            continue;
          } else {
            namesObj[current.name] = current.name;
            let newEvent;
            if (current.classifications) {
              if (
                current.classifications[0].segment &&
                current.classifications[0].genre &&
                current.classifications[0].subGenre
              ) {
                newEvent = await Event.create({
                  name: current.name,
                  type: current.type,
                  img: current.images[0].url,
                  tickets: 100,
                  seats: makeSeatChart(),
                  location: current._embedded.venues[0].name,
                  startTime: `${current.dates.start.localDate} ${current.dates.start.localTime}`,
                  endTime: current.dates.start.dateTime,
                  price: current.priceRanges[0].min,
                  category: current.classifications[0].segment.name,
                  genre: current.classifications[0].genre.name,
                  subGenre: current.classifications[0].subGenre.name,
                });
              } else if (
                current.classifications[0].segment &&
                current.classifications[0].genre
              ) {
                newEvent = await Event.create({
                  name: current.name,
                  type: current.type,
                  img: current.images[0].url,
                  tickets: 100,
                  seats: makeSeatChart(),
                  location: current._embedded.venues[0].name,
                  startTime: `${current.dates.start.localDate} ${current.dates.start.localTime}`,
                  endTime: current.dates.start.dateTime,
                  price: current.priceRanges[0].min,
                  category: current.classifications[0].segment.name,
                  genre: current.classifications[0].genre.name,
                });
              } else {
                newEvent = await Event.create({
                  name: current.name,
                  type: current.type,
                  img: current.images[0].url,
                  tickets: 100,
                  seats: makeSeatChart(),
                  location: current._embedded.venues[0].name,
                  startTime: `${current.dates.start.localDate} ${current.dates.start.localTime}`,
                  endTime: current.dates.start.dateTime,
                  price: current.priceRanges[0].min,
                  category: current.classifications[0].segment.name,
                });
              }
            } else {
              newEvent = await Event.create({
                name: current.name,
                type: current.type,
                img: current.images[0].url,
                tickets: 100,
                location: current._embedded.venues[0].name,
                startTime: `${current.dates.start.localDate} ${current.dates.start.localTime}`,
                endTime: current.dates.start.dateTime,
                price: current.priceRanges[0].min,
              });
            }

            if (!current.classifications) {
              newEvent.addTag(misc);
            } else {
              current.classifications[0].segment.name === "Sports" &&
              current.classifications[0].segment.name
                ? newEvent.addTag(sports)
                : current.classifications[0].segment.name === "Music" &&
                  current.classifications[0].segment.name
                ? newEvent.addTag(music)
                : current.classifications[0].segment.name ===
                    "Arts & Theatre" && current.classifications[0].segment.name
                ? newEvent.addTag(artsAndTheatre)
                : newEvent.addTag(misc);
            }
          }
        }
        console.log("key done");
      }
      console.log("Obj done");
    }

    // for (let i = 0; i < data._embedded.events.length; i++) {

    //   const current = data._embedded.events[i];

    //   if (current.name.includes('TBA')) continue;

    //   const newEvent = await Event.create({
    //     name: current.name,
    //     type: current.type,
    //     img: current.images[0].url,
    //     location: current._embedded.venues[0].name,
    //     startTime: `${current.dates.start.localDate} ${current.dates.start.localTime}`,
    //     endTime: current.dates.start.dateTime,
    //   })

    //   if (!current.classifications) {
    //     newEvent.addTag(misc)
    //   }
    //   else {
    //     current.classifications[0].segment.name === 'Sports' && current.classifications[0].segment.name
    //     ? newEvent.addTag(sports) : current.classifications[0].segment.name === 'Music' && current.classifications[0].segment.name
    //     ? newEvent.addTag(music) : current.classifications[0].segment.name === 'Arts & Theatre' && current.classifications[0].segment.name
    //     ? newEvent.addTag(artsAndTheatre) : newEvent.addTag(misc)
    //   }
    // }
    console.log("Seeding Successful");
  } catch (err) {
    console.log(err);
  }
};

syncAndSeed();
