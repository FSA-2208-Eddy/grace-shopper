const User = require("../db/User.js");
const Order = require("../db/Order.js");
const LineItem = require("../db/LineItem.js");
const Event = require("../db/Event.js");
const router = require("express").Router();

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
router.get("/order-history", requireToken, async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      where: {
        userId: req.user.id,
        isCart: false,
      },
      include: [{ model: LineItem, include: Event }],
    });
    let lineItems = [];
    for (let i = 0; i < orders.length; i++) {
      let currentOrder = orders[i];
      let items = currentOrder.lineitems;
      lineItems = [...lineItems, ...items];
    }
    res.send(lineItems);
  } catch (error) {
    next(error);
  }
});
router.get("/cart", requireToken, async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: {
        userId: req.user.id,
        isCart: true,
      },
      include: [{ model: LineItem, include: Event }],
    });
    res.send(cart);
  } catch (err) {
    next(err);
  }
});

//remove items from cart
// expects a req.body to include: lineItemId
router.put("/cart-remove", requireToken, async (req, res, next) => {
  try {
    const toDelete = await LineItem.findByPk(req.body.lineItemId);
    await toDelete.destroy();
    const cart = await Order.findOne({
      where: {
        userId: req.user.id,
        isCart: true,
      },
      include: [{ model: LineItem, include: Event }],
    });
    res.send(cart);
  } catch (err) {
    next(err);
  }
});

// add items to current order
// expects a req.body to include: eventId, qty, seat
router.put("/cart", requireToken, async (req, res, next) => {
  try {
    const event = await Event.findByPk(req.body.eventId);
    const newLineItem = await LineItem.create({
      qty: req.body.qty,
      seat: req.body.seat,
    });
    newLineItem.addEvent(event);
    const userAndOrder = await User.findByPk(req.user.id, {
      include: Order,
    });
    const cart = await Order.findOne({
      where: {
        userId: userAndOrder.id,
        isCart: true,
      },
    });
    newLineItem.set({
      orderId: cart.id,
    });
    await newLineItem.save();
    // cart.addLineItem(newLineItem);
    let order = await Order.findByPk(cart.id, {
      include: LineItem,
    });
    res.send(order);
  } catch (ex) {
    next(ex);
  }
});

// checkout
router.put("/checkout", requireToken, async (req, res, next) => {
  try {
    const userAndOrder = await User.findByPk(req.user.id, {
      include: Order,
    });
    const cart = await Order.findOne({
      where: {
        userId: userAndOrder.id,
        isCart: true,
      },
      include: [{ model: LineItem, include: Event }],
    });
    const cartEvents = [];
    cart.lineItems.forEach((item) => {
      const event = item.events[0];
      event.decrementTickets(10, ["A1", "A2", "A3"]);
    });
    cart.set({
      isCart: false,
    });
    cart.save();
    const newOrder = await Order.create({
      userId: userAndOrder.id,
    });
    const newCart = await Order.findOne({
      where: {
        userId: req.user.id,
        isCart: true,
      },
      include: [{ model: LineItem, include: Event }],
    });
    res.send(newCart);
  } catch (ex) {}
});

// get the user's information, and their orders
router.get("/single", requireToken, async (req, res, next) => {
  try {
    const userAndOrder = await User.findByPk(req.user.id, {
      include: Order,
    });
    res.send(userAndOrder);
  } catch (ex) {
    next(ex);
  }
});

router.put("/guest-checkout", async (req, res, next) => {
  try {
    let user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) {
      let randNum = "" + Math.floor(Math.random() * 10000000);
      user = await User.create({
        firstName: "Placeholder",
        lastName: "Placeholder",
        password: "Placeholder",
        username: randNum,
        email: req.body.email,
      });
    }
    const cart = req.body.cart;
    const order = await Order.create({
      userId: user.id,
      isCart: false,
    });
    cart.lineitems.forEach(async (element) => {
      const event = await Event.findByPk(element.events[0].id);
      const lineItem = await LineItem.create({
        qty: element.qty,
        seat: element.seat,
        orderId: order.id,
      });
      lineItem.addEvent(event);
    });
    res.sendStatus(200);
  } catch (ex) {
    next(ex);
  }
});

// update user's information (takes new details in req.body)
router.put("/:id", requireToken, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    user.set(req.body);
    await user.save();
    res.send(user);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
