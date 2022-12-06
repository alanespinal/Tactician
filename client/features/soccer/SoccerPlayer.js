import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Draggable from "react-draggable";
import { addSoccerPlayer } from "./soccerPlayerSlice";

function SoccerPlayer({ color, playerNumber, xCoordinate, yCoordinate }) {
  const userId = useSelector((state) => state.auth.me.id);
  const dispatch = useDispatch();
  const [x, setX] = useState(xCoordinate);
  const [y, setY] = useState(yCoordinate);

  const handleStop = (e, data) => {
    setX(data.x);
    setY(data.y);
    dispatch(
      addSoccerPlayer({
        playerNumber: playerNumber,
        xCoordinate: data.x,
        yCoordinate: data.y,
        color: color,
        userId: userId,
      })
    );
  };

  return (
    <Draggable defaultPosition={{ x: x, y: y }} onStop={handleStop}>
      <svg height="100" width="100">
        <circle
          cx="50"
          cy="50"
          r="25"
          stroke="black"
          strokeWidth="3"
          fill={color}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          stroke="black"
          strokeWidth="2px"
          dy=".3em"
        >
          {playerNumber}
        </text>
      </svg>
    </Draggable>
  );
}

export default SoccerPlayer;
