import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./slices/eventsSlice.js";

const store = configureStore({
  reducer: {
    events: eventsReducer,
  },
});

export default store;
