import React from "react";
import "./App.css";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Gallery from "./Gallery";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Pierre Dabadie</h1>
      <h2 style={{ textAlign: "center" }}>Artiste Peintre</h2>
      {/* <nav>
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
      </nav> */}
      <Gallery />
    </>
  );
}

export default App;
