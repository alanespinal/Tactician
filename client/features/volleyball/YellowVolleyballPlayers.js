import React from "react";
import VolleyballPlayer from "./VolleyballPlayer";
import { Stack } from "@mui/material";

function YellowVolleyballPlayers({ players }) {
  const yellowPlayers = players.filter(
    (player) => player.color === "yellow" || player.color === "SpringGreen"
  );
  const yellowPositions = yellowPlayers.map((player) => player.position);

  const positions = ["L", "O", "S", "MB2", "MB1", "OH2", "OH1"];

  return (
    <Stack spacing={-12.5}>
      {yellowPlayers.map((player, idx) => {
        if (player.position === "L") {
          return (
            <VolleyballPlayer
              color={"SpringGreen"}
              position={player.position}
              key={idx}
              xCoordinate={player.xCoordinate}
              yCoordinate={player.yCoordinate}
            />
          );
        } else {
          return (
            <VolleyballPlayer
              color={player.color}
              position={player.position}
              key={idx}
              xCoordinate={player.xCoordinate}
              yCoordinate={player.yCoordinate}
            />
          );
        }
      })}
      {positions.map((position, idx) => {
        if (!yellowPositions.includes(position) && position !== "L") {
          return (
            <VolleyballPlayer
              color={"yellow"}
              position={position}
              key={idx}
              xCoordinate={50}
              yCoordinate={50}
            />
          );
        } else if (!yellowPositions.includes(position) && position === "L") {
          return (
            <VolleyballPlayer
              color={"SpringGreen"}
              position={position}
              key={idx}
              xCoordinate={50}
              yCoordinate={50}
            />
          );
        }
      })}
    </Stack>
  );
}

export default YellowVolleyballPlayers;
