const User = require("../db/User.js");
const Order = require("../db/Order.js");
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

router.post("/login", async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body) });
  } catch (ex) {
    next(ex);
  }
});

// sign up on website, (takes whatever is in req.body), and associates a new order with the user
router.post("/signup", async (req, res, next) => {
  try {
    let newUser = await User.findOne({
      where: {
        firstName: "Placeholder",
        lastName: "Placeholder",
        email: req.body.email,
      },
    });
    if (!newUser) {
      newUser = await User.create(req.body);
      await Order.create({
        userId: newUser.id,
      });
      res.send({ token: await User.authenticate(req.body) });
    } else {
      newUser.set(req.body);
      newUser.save();
      await Order.create({
        userId: newUser.id,
      });
      res.sendStatus(200);
    }
  } catch (ex) {
    next(ex);
  }
});

router.get("/", requireToken, async (req, res, next) => {
  try {
    res.send(req.user);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
