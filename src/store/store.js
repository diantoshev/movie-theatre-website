import { configureStore } from "@reduxjs/toolkit";
import activeUserReducer from "./ActiveUserSlice";
import allTheatresReducer from './TheatreSlice';
import allMoviesReducer from './MovieSlice';
import programEntryReducer from './ProgramEntrySlice';

export default configureStore({
  reducer: {
    activeUser: activeUserReducer,
    theatre: allTheatresReducer,
    allMovies: allMoviesReducer,
    programEntries: programEntryReducer
  },
});
