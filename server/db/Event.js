const Sequelize = require("sequelize");
const db = require("./database.js");

const Event = db.define("event", {
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
  seats: {
    type: Sequelize.TEXT,
    get() {
      return this.getDataValue("seats").split(";");
    },
    set(val) {
      this.setDataValue("seats", val.join(";"));
    },
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
  img: {
    type: Sequelize.STRING,
    defaultValue:
      "https://cdn.choosechicago.com/uploads/2019/06/festivals-events-1800x900.jpg",
  },
  price: {
    type: Sequelize.FLOAT,
    defaultValue: 0.0,
  },
  category: {
    type: Sequelize.STRING,
  },
  genre: {
    type: Sequelize.STRING,
  },
  subGenre: {
    type: Sequelize.STRING,
  },
  longitude: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  latitude: {
    type: Sequelize.FLOAT,
    allowNull: false,
  }
});

Event.prototype.decrementTickets = function (qty, reservedStr) {
  this.tickets -= qty;
  let currentSeats = this.seats.split(";");
  let reserved = reservedStr.split(";");
  for (let i = 0; i < reserved.length; i++) {
    let currentReserved = reserved[i];
    const index = currentSeats.indexOf(currentReserved);
    if (index > -1) {
      currentSeats.splice(index, 1);
    }
  }
  this.seats = currentSeats;
};
module.exports = Event;
