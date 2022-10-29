import { configureStore } from "@reduxjs/toolkit";
import activeUserReducer from "./ActiveUserSlice";
import allTheatresReducer from './TheatreSlice';
import allMoviesReducer from './MovieSlice';
import screeningReducer from './ScreeningSlice';

export default configureStore({
  reducer: {
    activeUser: activeUserReducer,
    theatre: allTheatresReducer,
    allMovies: allMoviesReducer,
    screening: screeningReducer,
  },
});
