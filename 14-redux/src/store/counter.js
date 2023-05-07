import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
    counter: 0,
    showCounter: true,
  };
  
  const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
      add1(state) {
        state.counter++;
      },
      sub1(state) {
        state.counter--;
      },
      incby(state, action) {
        state.counter = state.counter + action.payload;
      },
      toggle(state) {
        state.showCounter = !state.showCounter;
      },
    },
  });

  export const counterActions = counterSlice.actions;

  export default counterSlice.reducer;