import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hi gamers</h1>
      <Login />
    </div>
  );
}

export default App;
