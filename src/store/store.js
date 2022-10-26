import { configureStore } from "@reduxjs/toolkit";
import activeUserReducer from "./ActiveUserSlice";
import allTheatresReducer from './TheatreDataSlice';
import allMoviesReducer from './MovieDataSlice';

export default configureStore({
  reducer: {
    activeUser: activeUserReducer,
    allTheatres: allTheatresReducer,
    allMovies: allMoviesReducer,
  },
});
