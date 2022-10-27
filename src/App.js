import "./App.css";
import React, { useEffect } from "react";
import './App.css';
import Navigation from './components/Navigation/Navigation';
import RouterLogic from "./pages/Router/Router";
import { useDispatch } from 'react-redux';
import { fetchMovies } from './store/MovieDataSlice';


function App() {
  // Will fetch all movies from the fake server and add them to the state, 
  // when the app initializes, so they are available to acces on every page:
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  });

  return (
    <div className="App">
      <Navigation />
      <RouterLogic />
    </div>
  );
}

export default App;

