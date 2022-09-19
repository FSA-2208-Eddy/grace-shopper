// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const User = require('./User')
const Order = require('./Order')
const Tag = require('./Tag')
const LineItem = require('./LineItem')
const Event = require('./Event')


const syncAndSeed = async () => {
    try {
    await db.sync({ force: true });

    //use this area to seed your database
    await User.create({
      username: 'Thomas',
      password: 'testpassword',
      firstName: 'Thomas',
      lastName: 'Bak',
      email: 'thomas@gmail.com',
      isAdmin: true
    })

    console.log(`Seeding successful!`);

    } catch(err) {
      console.log("problem seeding")
    }
};

User.hasMany(Order);
Tag.hasMany(Event);
LineItem.hasOne(Event);
Order.belongsTo(User);
Order.hasMany(LineItem);


module.exports = {
    // Include your models in this exports object as well!
    db,
    syncAndSeed,
    User,
    Order,
    Tag,
    LineItem,
    Event
}