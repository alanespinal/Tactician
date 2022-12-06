import React from "react";
import VolleyballPlayer from "./VolleyballPlayer";
import { Stack } from "@mui/material";

function RedVolleyballPlayers({ players }) {
  const redPlayers = players.filter(
    (player) => player.color === "red" || player.color === "MediumPurple"
  );
  const redPositions = redPlayers.map((player) => player.position);

  const positions = ["L", "O", "S", "MB2", "MB1", "OH2", "OH1"];

  return (
    <Stack spacing={-12.5}>
      {redPlayers.map((player, idx) => {
        if (player.position === "L") {
          return (
            <VolleyballPlayer
              color={"MediumPurple"}
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
        if (!redPositions.includes(position) && position !== "L") {
          return (
            <VolleyballPlayer
              color={"red"}
              position={position}
              key={idx}
              xCoordinate={50}
              yCoordinate={50}
            />
          );
        } else if (!redPositions.includes(position) && position === "L") {
          return (
            <VolleyballPlayer
              color={"MediumPurple"}
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

export default RedVolleyballPlayers;
