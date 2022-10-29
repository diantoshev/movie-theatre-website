import "./App.css";
import React, { useEffect } from "react";
import './App.css';
import Navigation from './components/Navigation/Navigation';
import RouterLogic from "./pages/Router/Router";
import { useDispatch } from 'react-redux';
import { fetchMovies } from './store/MovieSlice';
import { theatreManager } from './model/TheatreManager';
import { getRandomItem, programDates } from "./util/utilFuncs";
import { Screening, hours } from './model/Screening';
import { movieManager } from './model/MovieManager';

function App() {
  // Will fetch all movies from the fake server and add them to the state, 
  // when the app initializes, so they are available to acces on every page:
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const dispatch = useDispatch();
  const allTheatres = theatreManager.allTheatres;
  const allMovies = movieManager.allMovies;
  (function initiateScreenings() {
    allTheatres.forEach(theatre => {
      programDates().forEach(date => {
        hours.forEach(hour => {
          const randomMovie = getRandomItem(allMovies);
          const currentScreening = new Screening(
            theatre.id,
            randomMovie.Title,
            randomMovie.imdbID,
            randomMovie.Poster,
            date,
            hour
          )
          theatre.screenings.push(currentScreening);
        })
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

