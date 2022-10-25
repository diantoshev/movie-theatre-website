import { configureStore } from "@reduxjs/toolkit";
import activeUserReducer from "./ActiveUserSlice";
import allTheatresReducer from './TheatreDataSlice';

export default configureStore({
  reducer: {
    activeUser: activeUserReducer,
    allTheatres: allTheatresReducer
  },
});
