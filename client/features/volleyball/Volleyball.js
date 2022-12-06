import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Stack } from "@mui/material";
import {
  getVolleyballPlayers,
  resetAllVolleyballPlayers,
} from "./volleyballPlayerSlice";
import BlueVolleyballPlayers from "./BlueVolleyballPlayers";
import GreenVolleyballPlayers from "./GreenVolleyballPlayers";
import RedVolleyballPlayers from "./RedVolleyballPlayers";
import YellowVolleyballPlayers from "./YellowVolleyballPlayers";

function Volleyball() {
  const userId = useSelector((state) => state.auth.me.id);
  const players = useSelector((state) => state.volleyballPlayer.players);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetAllVolleyballPlayers(userId));
    window.location.reload();
    dispatch(getVolleyballPlayers(userId));
  };
  useEffect(() => {
    dispatch(getVolleyballPlayers(userId));
  }, []);

  return (
    <div>
      {/* <div className="key"> */}
      <img
        src="https://i.ibb.co/vBNwZCk/volleyball-court-vector-5787410.jpg"
        alt="volleyball-court-vector-5787410"
        border="0"
      />
      {/* <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 300,
            height: 350,
          }}
        >
          <h3>Key</h3>
          <p>OH: Outside Hitter</p>
          <p>MB: Middle Blocker</p>
          <p>S: Setter</p>
          <p>O: Opposite Hitter</p>
          <p>L: Libero</p>
        </Card> */}
      {/* </div> */}
      <div className="players">
        <Stack spacing={-12.5}>
          <GreenVolleyballPlayers players={players} />
        </Stack>
        <Stack spacing={-12.5}>
          <RedVolleyballPlayers players={players} />
        </Stack>
        <Stack spacing={-12.5}>
          <BlueVolleyballPlayers players={players} />
        </Stack>
        <Stack spacing={-12.5}>
          <YellowVolleyballPlayers players={players} />
        </Stack>
      </div>
      <button onClick={handleReset}>Reset All</button>
    </div>
  );
}

export default Volleyball;
