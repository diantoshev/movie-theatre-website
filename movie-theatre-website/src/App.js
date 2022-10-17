import "./App.css";
import Login from "./modules/LoginPage/Login";
import Register from "./modules/RegisterPage/Register";
import React, { useState } from "react";
import './App.css';
import Navbar from './modules/HomePage/components/Navigation/Navigation';
import RouterLogic from "./modules/Router/Router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterLogic />
    </div>
  );
}

export default App;
