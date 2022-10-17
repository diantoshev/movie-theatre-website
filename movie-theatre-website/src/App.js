import "./App.css";
import Login from "./modules/LoginPage/Login";
import Register from "./modules/RegisterPage/Register";
import React, { useState } from "react";
import './App.css';
import Navbar from './modules/HomePage/components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <br />
      <br />
      <Register />
    </div>
  );
}

export default App;
