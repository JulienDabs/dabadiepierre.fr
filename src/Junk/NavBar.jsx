import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

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
                            <NavLink to ="/Aerographe">Aerographe</NavLink>
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

export default NavBar