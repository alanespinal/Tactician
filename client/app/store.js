import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import soccerPlayerReducer from "../features/soccer/soccerPlayerSlice";
import volleyballPlayerReducer from "../features/volleyball/volleyballPlayerSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    soccerPlayer: soccerPlayerReducer,
    volleyballPlayer: volleyballPlayerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
