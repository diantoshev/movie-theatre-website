import { configureStore } from "@reduxjs/toolkit";
import activeUserReducer from "./ActiveUserSlice";

export default configureStore({
  reducer: {
    activeUser: activeUserReducer,
  },
});
