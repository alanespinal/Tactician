import React from "react";
import Player from "./Player";
import { Stack } from "@mui/material";

function BluePlayers({ players }) {
  const bluePlayers = players.filter((player) => player.color === "blue");
  const blueNumbers = bluePlayers.map((player) => player.playerNumber);

  const numbers = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  return (
    <Stack spacing={-12.5}>
      {bluePlayers.map((player) => (
        <Player
          color={"#2e7eff"}
          playerNumber={player.playerNumber}
          key={player.playerNumber}
          xCoordinate={player.xCoordinate}
          yCoordinate={player.yCoordinate}
        />
      ))}
      {numbers.map((number) => {
        if (!blueNumbers.includes(number)) {
          return (
            <Player
              color={"#2e7eff"}
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

export default BluePlayers;
