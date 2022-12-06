import React from "react";
import VolleyballPlayer from "./VolleyballPlayer";
import { Stack } from "@mui/material";

function GreenVolleyballPlayers({ players }) {
  const greenPlayers = players.filter(
    (player) => player.color === "green" || player.color === "cyan"
  );
  const greenPositions = greenPlayers.map((player) => player.position);

  const positions = ["L", "O", "S", "MB2", "MB1", "OH2", "OH1"];

  return (
    <Stack spacing={-12.5}>
      {greenPlayers.map((player, idx) => {
        if (player.position === "L") {
          return (
            <VolleyballPlayer
              color={"cyan"}
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
        if (!greenPositions.includes(position) && position !== "L") {
          return (
            <VolleyballPlayer
              color={"green"}
              position={position}
              key={idx}
              xCoordinate={50}
              yCoordinate={50}
            />
          );
        } else if (!greenPositions.includes(position) && position === "L") {
          return (
            <VolleyballPlayer
              color={"cyan"}
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

export default GreenVolleyballPlayers;
