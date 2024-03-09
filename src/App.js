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
      showSubmenu: false
    };
    this.navbarRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
  }

  handleDocumentClick = (event) => {
    // If click was outside the navbar and the navbar is open, close it
    if (this.navbarRef.current && !this.navbarRef.current.contains(event.target) && this.state.clicked) {
      this.setState({ clicked: false });
    }
  };

  handleClick = (event) => {
    // Toggle the clicked state for mobile menu icon clicks
    this.setState(prevState => ({ clicked: !prevState.clicked }));
    event.preventDefault(); // Prevent default link action
  };

  toggleSubmenu = (event) => {
    // Prevent the document click listener from closing the navbar
    event.stopPropagation();
    // Toggle submenu visibility
    this.setState(prevState => ({ showSubmenu: !prevState.showSubmenu }));
  };

  handleLinkClick = () => {
    // Close navbar when a link is clicked, useful for mobile
    if (this.state.clicked) {
      this.setState({ clicked: false });
    }
  };
  render() {
  
      return (
             
          <nav ref={this.navbarRef}>
              <NavLink to ="/"><img className="signature" src={NavPic} alt="Pierre Dabadie"/></NavLink>
              <div>
              <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"} onClick={this.handleLinkClick}>
              <li>
                {/* Modified NavLink for "Les périodes" to toggle submenu visibility */}
                <NavLink to="/" onClick={this.toggleSubmenu}>Les périodes</NavLink>
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
