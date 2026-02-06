import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./slice/sessionSlice.js"
const store = configureStore({
  reducer: {
    session:sessionReducer
  },
});

export default store;
