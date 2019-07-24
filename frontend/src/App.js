import React from "react";
import { Navbar } from "./components/Navbar";
import { LandingPage } from "./components/LandingPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 id="title">Welcom To The Way</h1>
      <LandingPage />
    </div>
  );
}

export default App;
