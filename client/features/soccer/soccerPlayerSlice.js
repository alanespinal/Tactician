import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSoccerPlayers = createAsyncThunk(
  "players/get",
  async (userId) => {
    const { data } = await axios.get(`/api/users/${userId}/soccer-players`);
    return data;
  }
);

export const addSoccerPlayer = createAsyncThunk(
  "players/create",
  async ({ playerNumber, xCoordinate, yCoordinate, color, userId }) => {
    const { data } = await axios.post(`/api/users/${userId}/soccer-players`, {
      playerNumber,
      xCoordinate,
      yCoordinate,
      color,
      userId,
    });
    return data;
  }
);

export const resetAllSoccerPlayers = createAsyncThunk(
  "soccer-players/delete",
  async (userId) => {
    const { data } = await axios.delete(`/api/users/${userId}/soccer-players`);
    return data;
  }
);

export const soccerPlayerSlice = createSlice({
  name: "players",
  initialState: {
    players: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSoccerPlayers.fulfilled, (state, action) => {
      state.players = action.payload;
    });
    builder.addCase(getSoccerPlayers.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(addSoccerPlayer.fulfilled, (state, action) => {
      state.players.push(action.payload);
    });
    builder.addCase(addSoccerPlayer.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(resetAllSoccerPlayers.fulfilled, (state, action) => {
      state.players = action.payload;
    });
    builder.addCase(resetAllSoccerPlayers.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default soccerPlayerSlice.reducer;
