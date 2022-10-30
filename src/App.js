import "./App.css";
import React, { useEffect } from "react";
import './App.css';
import Navigation from './components/Navigation/Navigation';
import RouterLogic from "./pages/Router/Router";
import { useDispatch } from 'react-redux';
import { fetchMovies } from './store/MovieSlice';
import { theatreManager } from './model/TheatreManager';
import { getRandomItem, programDays } from "./util/utilFuncs";
import { Screening } from './model/Screening';
import { movieManager } from './model/MovieManager';

function App() {
  // Will fetch all movies from the fake server and add them to the state, 
  // when the app initializes, so they are available to acces on every page:
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const nextWeekProgram = programDays();
  const allTheatres = theatreManager.allTheatres;

  // This function will take all screenings, go through each theatre program,
  // get n unique movies form allMovies and push individual screenings for each day.
  (function initiateScreenings() {
    allTheatres.forEach(theatre => {
      nextWeekProgram.forEach(date => {
        const programDate = { [date]: [] };
        movieManager.getRandomMovies(7).forEach(randomMovie => {
          const currentScreening = new Screening(
            theatre.id,
            randomMovie.Title,
            randomMovie.imdbID,
            randomMovie.Poster,
            date)
          programDate[date].push(currentScreening)
        })
        theatre.programDates.push(programDate);
      })
    })
  })();

  return (
    <div className="App">
      <Navigation />
      <RouterLogic />
    </div>
  );
}

export default App;

