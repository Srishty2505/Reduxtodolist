import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice.js";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
export default store;
