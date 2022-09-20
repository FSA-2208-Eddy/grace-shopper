const User = require('../db/User.js')
const Order = require('../db/Order.js')
const LineItem = require('../db/LineItem.js')
const Event = require('../db/Event.js')
const router = require('express').Router()

const requireToken = async (req, res, next) => {
    try {
      const token = req.headers.authorization;
      const user = await User.findByToken(token);
      req.user = user;
      next();
    } catch(error) {
      next(error);
    }
  };

// get the user's information
router.get("/", requireToken, async (req, res, next) => {
  try {
    const userAndOrder = await User.findByPk(req.user.id, {
        include: Order
    })
    res.send(userAndOrder);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router