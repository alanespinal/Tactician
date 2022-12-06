import React from "react";
import VolleyballPlayer from "./VolleyballPlayer";
import { Stack } from "@mui/material";

function BlueVolleyballPlayers({ players }) {
  const bluePlayers = players.filter(
    (player) => player.color === "#2e7eff" || player.color === "white"
  );
  const bluePositions = bluePlayers.map((player) => player.position);

  const positions = ["L", "O", "S", "MB2", "MB1", "OH2", "OH1"];

  return (
    <Stack spacing={-12.5}>
      {bluePlayers.map((player, idx) => {
        if (player.position === "L") {
          return (
            <VolleyballPlayer
              color={"white"}
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
        if (!bluePositions.includes(position) && position !== "L") {
          return (
            <VolleyballPlayer
              color={"#2e7eff"}
              position={position}
              key={idx}
              xCoordinate={50}
              yCoordinate={50}
            />
          );
        } else if (!bluePositions.includes(position) && position === "L") {
          return (
            <VolleyballPlayer
              color={"white"}
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

export default BlueVolleyballPlayers;
