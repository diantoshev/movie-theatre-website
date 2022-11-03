import "./App.css";
import React, { useEffect } from "react";
import './App.css';
import Navigation from './components/Navigation/Navigation';
import RouterLogic from "./pages/Router/Router";
import { useDispatch } from 'react-redux';
import { fetchMovies } from './store/MovieSlice';
import { theatreManager } from './model/TheatreManager';
import { programDays } from "./util/utilFuncs";
import { Screening } from './model/Screening';
import { movieManager } from './model/MovieManager';
import ProgramEntry from "./model/ProgramEntry";
import { screeningManager } from './model/ScreeningManager';
import { updateProgramEntries } from './store/ProgramEntrySlice';

function App() {
  // Will fetch all movies from the fake server and add them to the state, 
  // when the app initializes, so they are available to acces on every page:
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies())
  }, []);

  const nextWeekProgram = programDays();
  const allTheatres = theatreManager.allTheatres;
  const hours = ['13:00', '15:00', '17:00', '19:00', '21:00'];
  const programEntries = screeningManager.allScreenings;
  // This function will take all screenings, go through each theatre program,
  // get n unique movies form allMovies and push individual screenings for each day.
  (function initiateScreenings() {
    allTheatres.forEach(theatre => {
      nextWeekProgram.forEach(date => {
        const programDate = { [date]: [] };
        movieManager.getRandomMovies(1).forEach(randomMovie => {
          const programEntry = new ProgramEntry(
            theatre.id,
            theatre.name,
            randomMovie.Title,
            randomMovie.imdbID,
            randomMovie.Poster,
            date,
          );
          hours.forEach(hour => {
            const currentScreening = new Screening(hour);
            programEntry.screenings.push(currentScreening)
          })
          programDate[date].push(programEntry)
          programEntries.push(programEntry);
        })
        theatre.programDates.push(programDate);
      })
    })

    dispatch(updateProgramEntries(JSON.parse(JSON.stringify(programEntries))))
  })();


  return (
    <div className="App">
      <Navigation />
      <RouterLogic />
    </div>
  );
}

export default App;

