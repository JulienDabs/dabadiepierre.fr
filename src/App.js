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
import Footer from "./components/Footer/Footer";
import NavPic from "./nav bar pic/dabadie.fr.png"


const App = () => (
  <div className='app'>
    
    <NavBar />
    <Main />
    <Footer />
    
    
  </div>

);

//I wasn't able to place the navbar into another file 

class NavBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        clicked: false,
        showSubmenu: false // added state to control visibility of submenu
      };
    }
  
    handleClick = () => {
      if (window.innerWidth <= 768) {
        this.setState({ clicked: false });
      }
      this.setState({ clicked: !this.state.clicked });
    };
  
    handleMouseEnter = () => {
        this.setState({ showSubmenu: true });
      };
    
      handleMouseLeave = () => {
        this.setState({ showSubmenu: false });
      };
  render() {
  
      return (
             
          <nav>
              <NavLink to ="/"><img className="signature" src={NavPic} alt="Pierre Dabadie"/></NavLink>
              <div>
                  <ul 
                  id="navbar" className={this.state.clicked ? "#navbar active":"#navbar"} 
                  onMouseLeave={this.handleMouseLeave}
                  onClick={this.handleLinkClick}>
                      <li>
                          <NavLink to="/" onMouseEnter={this.handleMouseEnter}>Les périodes</NavLink>
                            <ul className={this.state.showSubmenu ? 'visible' : 'submenu'}>
                                <li>
                                    <NavLink to="/Huile" onClick={this.handleLinkClick}>Huile</NavLink>
                                </li>
                                <li>
                                    <NavLink to ="/Aerographe" onClick={this.handleLinkClick}>Aérographe</NavLink>
                                </li>
                                <li>
                                    <NavLink to ="/Animaux" onClick={this.handleLinkClick}>Animaux</NavLink>
                                </li>
                                <li>
                                    <NavLink to = "/Contemporain" onClick={this.handleLinkClick}>Contemporain</NavLink>
                                </li>
                                <li>
                                    <NavLink to = "/Japon" onClick={this.handleLinkClick}>Japon</NavLink>
                                </li>
                                <li>
                                    <NavLink to ="/Today" onClick={this.handleLinkClick}>Aujourd'hui</NavLink>
                                </li>
                                <li>
                                    <NavLink to ="/Rouleau" onClick={this.handleLinkClick}>Rouleau</NavLink>
                                </li>
                            </ul>
                      </li>
                     
                      <li>
                          <NavLink to ="/Biographie" onClick={this.handleLinkClick}>Biographie</NavLink>
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
