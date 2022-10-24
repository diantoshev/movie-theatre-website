import { configureStore } from "@reduxjs/toolkit";
import activeUserReducer from "../features/ActiveUserSlice";

export default configureStore({
  reducer: {
    activeUser: activeUserReducer,
  },
});
