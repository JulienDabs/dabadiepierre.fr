import React from "react";
import "./App.css";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      
      {/* { <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> } */}
      <Home />
      <footer>
        <p>Pierre DABADIE</p>
        <p>Artiste peintre à Six-Fours-Les-Plages, FRANCE</p>
        <p>Contact: contact@pierredabadie.fr</p>
      </footer>
    </>
    
  );
}

export default App;
