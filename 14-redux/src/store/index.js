import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

// only ever make one store
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

// Dispatch goes to your action methods ... 'action creator' methods
// moved this ut to the state slice components
// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

export default store;
