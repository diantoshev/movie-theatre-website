import "./App.css";
import React, { useState } from "react";
import './App.css';
import Navigation from './components/Navigation/Navigation';
import RouterLogic from "./pages/Router/Router";

function App() {

  return (
    <div className="App">
      <Navigation />
      <RouterLogic />
    </div>
  );
}

export default App;
