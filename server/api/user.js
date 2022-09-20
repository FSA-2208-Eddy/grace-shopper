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

// get the user's information, and their orders
router.get("/:id", requireToken, async (req, res, next) => {
  try {
    const userAndOrder = await User.findByPk(req.params.id, {
        include: Order
    })
    res.send(userAndOrder);
  } catch (ex) {
    next(ex);
  }
});

// update user's information (takes new details in req.body)
router.put('/:id', requireToken, async(req,res,next) => {
    try {
        const user = await User.findByPk(req.params.id)
        user.set(req.body)
        await user.save()
        res.send(user)
    } catch(ex) {
        next(ex)
    }
})

// add items to current order
// expects a req.body to include: eventId, qty, seat
router.put('/cart', requireToken, async(req,res,next) => {
    try {
        const event = await Event.findByPk(req.body.eventId)
        const newLineItem = await LineItem.create({
            qty: req.body.qty,
            seat: req.body.seat
        })
        newLineItem.setEvent(event)
        const userAndOrder = await User.findByPk(req.user.id, {
            include: Order
        })
        newLineItem.set({
            orderId: userAndOrder.orders[userAndOrder.orders.length-1].id
        })
        await newLineItem.save()
        let order = await Order.findByPk(userAndOrder.orders[userAndOrder.orders.length-1].id, {
            include: LineItem
        })
        res.send(order)
    } catch (ex) {
        next(ex)
    }
})



module.exports = router