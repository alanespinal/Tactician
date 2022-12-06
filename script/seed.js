// "use strict";

const {
  db,
  models: { User, SoccerPlayer, VolleyballPlayer },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({ username: "cody", password: "123" }),
    User.create({ username: "murphy", password: "123" }),
  ]);

  const soccerPlayers = await Promise.all([
    SoccerPlayer.create({
      playerNumber: 1,
      xCoordinate: -305,
      yCoordinate: -345,
      color: "green",
      userId: 1,
    }),
    SoccerPlayer.create({
      playerNumber: 2,
      xCoordinate: -197,
      yCoordinate: -428,
      color: "green",
      userId: 1,
    }),
    SoccerPlayer.create({
      playerNumber: 3,
      xCoordinate: -203,
      yCoordinate: -283,
      color: "green",
      userId: 1,
    }),
    SoccerPlayer.create({
      playerNumber: 4,
      xCoordinate: -147,
      yCoordinate: -134,
      color: "green",
      userId: 1,
    }),
    SoccerPlayer.create({
      playerNumber: 5,
      xCoordinate: -137,
      yCoordinate: -543,
      color: "green",
      userId: 1,
    }),
    SoccerPlayer.create({
      playerNumber: 6,
      xCoordinate: -32,
      yCoordinate: -400,
      color: "green",
      userId: 1,
    }),
    SoccerPlayer.create({
      playerNumber: 7,
      xCoordinate: 187,
      yCoordinate: -539,
      color: "green",
      userId: 1,
    }),
    SoccerPlayer.create({
      playerNumber: 8,
      xCoordinate: -30,
      yCoordinate: -276,
      color: "green",
      userId: 1,
    }),
    SoccerPlayer.create({
      playerNumber: 9,
      xCoordinate: 252,
      yCoordinate: -347,
      color: "green",
      userId: 1,
    }),
    SoccerPlayer.create({
      playerNumber: 10,
      xCoordinate: 81,
      yCoordinate: -347,
      color: "green",
      userId: 1,
    }),
    SoccerPlayer.create({
      playerNumber: 11,
      xCoordinate: 206,
      yCoordinate: -152,
      color: "green",
      userId: 1,
    }),
  ]);

  const volleyballPlayers = await Promise.all([
    VolleyballPlayer.create({
      position: "OH1",
      xCoordinate: 557,
      yCoordinate: -555,
      color: "yellow",
      userId: 1,
    }),
    VolleyballPlayer.create({
      position: "OH2",
      xCoordinate: 261,
      yCoordinate: -346,
      color: "yellow",
      userId: 1,
    }),
    VolleyballPlayer.create({
      position: "OH1",
      xCoordinate: 557,
      yCoordinate: -555,
      color: "yellow",
      userId: 1,
    }),
    VolleyballPlayer.create({
      position: "MB1",
      xCoordinate: 566,
      yCoordinate: -450,
      color: "yellow",
      userId: 1,
    }),
    VolleyballPlayer.create({
      position: "OH2",
      xCoordinate: 333,
      yCoordinate: -398,
      color: "yellow",
      userId: 1,
    }),
    VolleyballPlayer.create({
      position: "S",
      xCoordinate: 565,
      yCoordinate: -812,
      color: "yellow",
      userId: 1,
    }),
    VolleyballPlayer.create({
      position: "O",
      xCoordinate: 268,
      yCoordinate: -897,
      color: "yellow",
      userId: 1,
    }),
    VolleyballPlayer.create({
      position: "L",
      xCoordinate: 275,
      yCoordinate: -1131,
      color: "green",
      userId: 1,
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
    soccerPlayers,
    volleyballPlayers,
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
