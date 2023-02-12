import React from "react";
import "./App.css";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Animaux from "./components/Animaux/Animaux";
import Aerographe from "./components/Aerographe/aerographe";
import Today from "./components/Aujourd'hui/Today";
import Contemporain from "./components/Contemporain/Contemporain";
import Huile from "./components/Huile/Huile";
import Japon from "./components/Japon/Japon";
import Rouleau from "./components/Rouleau/Rouleau";
import Bio from "./components/About/About";
import NavBar from "./components/NarBar/NavBar";


function App() {
  return (
    <>
      
     <div className="App">
      <NavBar />
     </div>
      <Bio />
      <footer>
        <p>Pierre DABADIE</p>
        <p>Artiste peintre à Six-Fours-Les-Plages, FRANCE</p>
        <p>contact@pierredabadie.fr</p>
        <br></br>
        <p>JMD Web Development</p>
      </footer>
    </>
    
  );
}

export default App;
