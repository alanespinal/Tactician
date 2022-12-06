import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPlayers = createAsyncThunk("players/get", async (userId) => {
  const { data } = await axios.get(`/api/users/${userId}/players`);
  return data;
});

export const addPlayer = createAsyncThunk(
  "players/create",
  async ({ playerNumber, xCoordinate, yCoordinate, color, userId }) => {
    const { data } = await axios.post(`/api/users/${userId}/players`, {
      playerNumber,
      xCoordinate,
      yCoordinate,
      color,
      userId,
    });
    return data;
  }
);

export const resetAll = createAsyncThunk("players/delete", async (userId) => {
  const { data } = await axios.delete(`/api/users/${userId}/players`);
  return data;
});

export const playerSlice = createSlice({
  name: "players",
  initialState: {
    players: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPlayers.fulfilled, (state, action) => {
      state.players = action.payload;
    });
    builder.addCase(getPlayers.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(addPlayer.fulfilled, (state, action) => {
      state.players.push(action.payload);
    });
    builder.addCase(addPlayer.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(resetAll.fulfilled, (state, action) => {
      state.players = action.payload;
    });
    builder.addCase(resetAll.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default playerSlice.reducer;
