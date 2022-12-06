import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getVolleyballPlayers = createAsyncThunk(
  "volleyballPlayers/get",
  async (userId) => {
    const { data } = await axios.get(`/api/users/${userId}/volleyball-players`);
    return data;
  }
);

export const addVolleyballPlayer = createAsyncThunk(
  "volleyballPlayers/create",
  async ({ position, xCoordinate, yCoordinate, color, userId }) => {
    const { data } = await axios.post(
      `/api/users/${userId}/volleyball-players`,
      {
        position,
        xCoordinate,
        yCoordinate,
        color,
        userId,
      }
    );
    return data;
  }
);

export const resetAllVolleyballPlayers = createAsyncThunk(
  "volleyballPlayers/delete",
  async (userId) => {
    const { data } = await axios.delete(
      `/api/users/${userId}/volleyball-players`
    );
    return data;
  }
);

export const volleyballPlayerSlice = createSlice({
  name: "volleyballPlayers",
  initialState: {
    players: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVolleyballPlayers.fulfilled, (state, action) => {
      state.players = action.payload;
    });
    builder.addCase(getVolleyballPlayers.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(addVolleyballPlayer.fulfilled, (state, action) => {
      state.players.push(action.payload);
    });
    builder.addCase(addVolleyballPlayer.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(resetAllVolleyballPlayers.fulfilled, (state, action) => {
      state.players = action.payload;
    });
    builder.addCase(resetAllVolleyballPlayers.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default volleyballPlayerSlice.reducer;
