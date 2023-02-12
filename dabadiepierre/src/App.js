import React, { Component } from "react";
import "./App.css";
import "./navbar.css";
import { NavLink, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Bio from './components/About/About';
import Aerographe from './components/Aerographe/aerographe';
import Animaux from './components/Animaux/Animaux';
import Rouleau from './components/Rouleau/Rouleau';
import Japon from './components/Japon/Japon';
import Contemporain from './components/Contemporain/Contemporain';
import Huile from './components/Huile/Huile';
import Today from "./components/Today/Today";


const App = () => (
  <div className='app'>
    
    <NavBar />
    <Main />
    
    
  </div>

);

class NavBar extends Component {
  state = {clicked : false}
  handleClick = () => {
      this.setState({clicked: !this.state.clicked})
  }
  render() {
  
      return (
             
          <nav>
              <NavLink to ="/">PierreDabadie.fr</NavLink>
              <div>
                  <ul id="navbar" className={this.state.clicked ? "#navbar active":"#navbar"}>
                      <li>
                          <NavLink className="active" to="/">Accueil</NavLink>
                      </li>
                      <li>
                          <NavLink to="/Huile">Huile</NavLink>
                      </li>
                      <li>
                          <NavLink to ="/Aerographe">Aérographe</NavLink>
                      </li>
                      <li>
                          <NavLink to ="/Animaux">Animaux</NavLink>
                      </li>
                      <li>
                          <NavLink to = "/Contemporain">Contemporain</NavLink>
                      </li>
                      <li>
                          <NavLink to = "/Japon">Japon</NavLink>
                      </li>
                      <li>
                          <NavLink to ="/Today">Aujourd'hui</NavLink>
                      </li>
                      <li>
                          <NavLink to ="/Biographie">Biographie</NavLink>
                      </li>
                  </ul>
              </div>
              <div id="mobile" onClick={this.handleClick}>
                  <i id="bar" className={this.state.clicked ? 'fa fa-times' : 'fas fa-bars'}></i>
              </div>
          </nav>
      );
  }   
}

const Main = () => {
  return (
    <Routes>
       {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/Biographie' element={<Bio/>}></Route>
        <Route exact path='/Aerographe' element={<Aerographe/>}></Route>
        <Route exact path='/Animaux' element={<Animaux/>}></Route>
        <Route exact path='/Today' element={<Today/>}></Route>
        <Route exact path='/Rouleau' element={<Rouleau/>}></Route>
        <Route exact path='/Japon' element={<Japon/>}></Route>
        <Route exact path='/Contemporain' element={<Contemporain/>}></Route>
        <Route exact path='/Huile' element={<Huile/>}></Route>
        
      
    </Routes>
  );
}
export default App;
