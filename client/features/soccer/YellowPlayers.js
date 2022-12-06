import React from "react";
import SoccerPlayer from "./SoccerPlayer";
import { Stack } from "@mui/material";

function YellowPlayers({ players }) {
  const yellowPlayers = players.filter((player) => player.color === "yellow");
  const yellowNumbers = yellowPlayers.map((player) => player.playerNumber);

  const numbers = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  return (
    <Stack spacing={-12.5}>
      {yellowPlayers.map((player) => (
        <SoccerPlayer
          color={player.color}
          playerNumber={player.playerNumber}
          key={player.playerNumber}
          xCoordinate={player.xCoordinate}
          yCoordinate={player.yCoordinate}
        />
      ))}
      {numbers.map((number) => {
        if (!yellowNumbers.includes(number)) {
          return (
            <SoccerPlayer
              color={"yellow"}
              playerNumber={number}
              key={number}
              xCoordinate={50}
              yCoordinate={50}
            />
          );
        }
      })}
    </Stack>
  );
}

export default YellowPlayers;
