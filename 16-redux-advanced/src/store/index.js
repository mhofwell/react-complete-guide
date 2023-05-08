import { configureStore } from "@reduxjs/toolkit";
// importing counterSlice.reducer as cartReducer here
import cartReducer from "./cart-slice";
import uiReducer from "./ui-slice";

// creating the app-wide store and pointing to your reducers for each state slice you want to manage
const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiReducer,
  },
});

export default store;
