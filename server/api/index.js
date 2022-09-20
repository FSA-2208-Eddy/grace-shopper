const router = require("express").Router();

// put your api routes here, for example:

// router.use('/students', require('./students'))

router.use('/admin', require('./admin.js'))
router.use('/users', require('./user.js'))
router.use("/events", require("./events.js"));
router.use("/auth", require("./auth.js"));

module.exports = router;
