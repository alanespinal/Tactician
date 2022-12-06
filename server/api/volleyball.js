const router = require("express").Router();
const {
  models: { User, VolleyballPlayer },
} = require("../db");
const { checkUser } = require("./middleware");
module.exports = router;

router.get("/:id/volleyball-players", async (req, res, next) => {
  try {
    const players = await VolleyballPlayer.findAll({
      where: {
        userId: req.params.id,
      },
    });
    res.json(players);
  } catch (err) {
    next(err);
  }
});

router.post("/:id/volleyball-players", async (req, res, next) => {
  try {
    const player = await VolleyballPlayer.findOne({
      where: {
        position: req.body.position,
        color: req.body.color,
        userId: req.body.userId,
      },
    });
    if (!player) {
      await VolleyballPlayer.create(req.body);
    } else if (player) {
      await player.update(req.body);
    }
    const allPlayers = await VolleyballPlayer.findAll({
      where: {
        userId: req.params.id,
      },
    });
    res.json(allPlayers);
  } catch (err) {
    next(err);
  }
});

router.put("/:id/volleyball-players", async (req, res, next) => {
  try {
    const player = await VolleyballPlayer.findOne({
      where: {
        userId: req.params.id,
        position: req.body.position,
        color: req.body.color,
      },
    });
    await player.update({
      xCoordinate: req.body.xCoordinate,
      yCoordinate: req.body.yCoordinate,
    });
    const allPlayers = await VolleyballPlayer.findAll({
      where: {
        userId: req.params.id,
      },
    });
    res.json(allPlayers);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id/volleyball-players", async (req, res, next) => {
  try {
    const allPlayers = await VolleyballPlayer.findAll({
      where: {
        userId: req.params.id,
      },
    });
    allPlayers.forEach((player) => player.destroy());
  } catch (err) {
    next(err);
  }
});
