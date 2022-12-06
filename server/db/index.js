//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const SoccerPlayer = require("./models/SoccerPlayer");
const VolleyballPlayer = require("./models/VolleyballPlayer");

User.hasMany(SoccerPlayer);
SoccerPlayer.belongsTo(User);

User.hasMany(VolleyballPlayer);
VolleyballPlayer.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    SoccerPlayer,
    VolleyballPlayer,
  },
};
