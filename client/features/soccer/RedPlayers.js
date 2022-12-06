import React from "react";
import Player from "./Player";
import { Stack } from "@mui/material";

function RedPlayers({ players }) {
  const redPlayers = players.filter((player) => player.color === "red");
  const redNumbers = redPlayers.map((player) => player.playerNumber);

  const numbers = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  return (
    <Stack spacing={-12.5}>
      {redPlayers.map((player) => (
        <Player
          color={player.color}
          playerNumber={player.playerNumber}
          key={player.playerNumber}
          xCoordinate={player.xCoordinate}
          yCoordinate={player.yCoordinate}
        />
      ))}
      {numbers.map((number) => {
        if (!redNumbers.includes(number)) {
          return (
            <Player
              color={"red"}
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

export default RedPlayers;
