import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Stack } from "@mui/material";
import { getSoccerPlayers, resetAllSoccerPlayers } from "./soccerPlayerSlice";
import GreenPlayers from "./GreenPlayers";
import RedPlayers from "./RedPlayers";
import BluePlayers from "./BluePlayers";
import YellowPlayers from "./YellowPlayers";
import { SportsSoccer } from "@mui/icons-material";
import Draggable from "react-draggable";

const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);
  const userId = useSelector((state) => state.auth.me.id);
  const players = useSelector((state) => state.soccerPlayer.players);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetAllSoccerPlayers(userId));
    window.location.reload();
    dispatch(getSoccerPlayers(userId));
  };

  useEffect(() => {
    dispatch(getSoccerPlayers(userId));
  }, []);

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <img
        src={"https://wallpapercave.com/wp/wp139791.jpg"}
        width="1000"
        height="600"
      />
      <Draggable>
        <SportsSoccer className={"ball"} />
      </Draggable>
      <div className="players">
        <Stack spacing={-12.5}>
          <GreenPlayers players={players} />
        </Stack>
        <Stack spacing={-12.5}>
          <RedPlayers players={players} />
        </Stack>
        <Stack spacing={-12.5}>
          <BluePlayers players={players} />
        </Stack>
        <Stack spacing={-12.5}>
          <YellowPlayers players={players} />
        </Stack>
      </div>
      <button onClick={handleReset}>Reset All</button>
    </div>
  );
};

export default Home;
