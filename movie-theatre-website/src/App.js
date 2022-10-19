import "./App.css";
import React, { useState } from "react";
import './App.css';
import Navbar from './pages/HomePage/components/Navigation/Navigation';
import RouterLogic from "./pages/Router/Router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterLogic />
    </div>
  );
}

export default App;
