const router = require("express").Router();
const {
  models: { User, SoccerPlayer },
} = require("../db");
const { checkUser } = require("./middleware");
module.exports = router;

router.get("/", checkUser, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "username"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/soccer-players", async (req, res, next) => {
  try {
    const players = await SoccerPlayer.findAll({
      where: {
        userId: req.params.id,
      },
    });
    res.json(players);
  } catch (err) {
    next(err);
  }
});

router.post("/:id/players", async (req, res, next) => {
  try {
    const player = await SoccerPlayer.findOne({
      where: {
        playerNumber: req.body.playerNumber,
        color: req.body.color,
        userId: req.body.userId,
      },
    });
    if (!player) {
      await Player.create(req.body);
    } else if (player) {
      await player.update(req.body);
    }
    const allPlayers = await SoccerPlayer.findAll({
      where: {
        userId: req.params.id,
      },
    });
    res.json(allPlayers);
  } catch (err) {
    next(err);
  }
});

router.put("/:id/players", async (req, res, next) => {
  try {
    const player = await SoccerPlayer.findOne({
      where: {
        userId: req.params.id,
        playerNumber: req.body.playerNumber,
        color: req.body.color,
      },
    });
    await player.update({
      xCoordinate: req.body.xCoordinate,
      yCoordinate: req.body.yCoordinate,
    });
    const allPlayers = await SoccerPlayer.findAll({
      where: {
        userId: req.params.id,
      },
    });
    res.json(allPlayers);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id/players", async (req, res, next) => {
  try {
    const allPlayers = await SoccerPlayer.findAll({
      where: {
        userId: req.params.id,
      },
    });
    allPlayers.forEach((player) => player.destroy());
  } catch (err) {
    next(err);
  }
});
