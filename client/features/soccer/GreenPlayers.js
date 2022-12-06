import React from "react";
import Player from "./Player";
import { Stack } from "@mui/material";

function GreenPlayers({ players }) {
  const greenPlayers = players.filter((player) => player.color === "green");
  const greenNumbers = greenPlayers.map((player) => player.playerNumber);

  const numbers = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  return (
    <Stack spacing={-12.5}>
      {greenPlayers.map((player) => (
        <Player
          color={player.color}
          playerNumber={player.playerNumber}
          key={player.playerNumber}
          xCoordinate={player.xCoordinate}
          yCoordinate={player.yCoordinate}
        />
      ))}
      {numbers.map((number) => {
        if (!greenNumbers.includes(number)) {
          return (
            <Player
              color={"green"}
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

export default GreenPlayers;
