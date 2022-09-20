const User = require("../db/User.js");
const Order = require("../db/Order.js");
const LineItem = require("../db/LineItem.js");
const Event = require("../db/Event.js");
const router = require("express").Router();
const Tag = require("../db/Tag");

router.get("/", async (req, res, next) => {
  try {
    res.send(await Event.findAll());
  } catch (error) {
    next(error);
  }
});

router.get("/type/:type", async (req, res, next) => {
  try {
    const type = req.params.type;
    res.send(
      await Event.findAll({
        where: {
          type: type,
        },
      })
    );
  } catch (error) {
    next(error);
  }
});

router.get("/tag/:id", async (req, res, next) => {
  try {
    const id = req.params.id;

    const tag = await Tag.findByPk(id, {
      include: Event,
    });
    res.send(tag.events);
  } catch (error) {
    next(error);
  }
});

router.get("/:eventId", async (req, res, next) => {
  try {
    const id = req.params.eventId;
    res.send(await Event.findByPk(id));
  } catch (error) {
    next(error);
  }
});

// router.post("/", async (req, res) => {
//   try {
//     res.status(201).send(await Event.create(req.body));
//   } catch (error) {
//     next(error);
//   }
// });

// router.delete("/:eventId", async (req, res) => {
//   try {
//     const id = req.params.eventId;
//     const event = await Event.findByPk(id);
//     await event.destroy();
//     res.status(204).send(campus);
//   } catch (error) {
//     next(error);
//   }
// });

// router.put("/:eventId", async (req, res) => {
//   try {
//     const id = req.params.eventId;
//     const event = Event.findByPk(id);
//     res.status(204).send(await event.update(req.body));
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
