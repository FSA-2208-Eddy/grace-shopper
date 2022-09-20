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
      if (!user.isAdmin) {
        throw new Error("You don't have rights to this!")
      }
      next();
    } catch(error) {
      next(error);
    }
  };

// create a new event (takes event details in req.body)
router.post("/event", requireToken, async (req, res, next) => {
  try {
    const newEvent = await Event.create(req.body)
    res.send(newEvent);
  } catch (ex) {
    next(ex);
  }
});

// update an event information (takes event details in req.body)
router.put('/event', requireToken, async(req,res,next) => {
    try {
        const event = await Event.findByPk(req.body.eventId)
        event.set(req.body)
        await event.save()
        res.send(event)
    } catch(ex) {
        next(ex)
    }
})

// delete an event (takes an eventId in req.body)
router.put('/delete-event', requireToken, async(req,res,next) => {
    try {
        const event = await User.findByPk(req.body.eventId)
        await event.destroy()
        res.sendStatus(204)
    } catch(ex) {
        next(ex)
    }
})

// delete a user (takes a userId in req.body)
router.put('/delete-user', requireToken, async(req,res,next) => {
    try {
        const user = await User.findByPk(req.body.userId)
        await user.destroy()
        res.sendStatus(204)
    } catch(ex) {
        next(ex)
    }
})



module.exports = router