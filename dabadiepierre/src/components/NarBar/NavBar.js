import { Component } from "react";
import "./navbar.css";

class NavBar extends Component {
    state = {clicked : false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
    
        return (
        <>
            <nav>
                <a href="/">PierreDabadie.fr</a>

                <div>
                    <ul id="navbar" className={this.state.clicked ? "#navbar active":"#navbar"}>
                        <li><a className="active" href="/">Accueil</a></li>
                        <li><a href="/Huile">Huile</a></li>
                        <li><a href="/Aerographe">Aerographe</a></li>
                        <li><a href="/Animaux">Animaux</a></li>
                        <li><a href="/Contemporain">Contemporain</a></li>
                        <li><a href="/Japon">Japon</a></li>
                        <li><a href="/Aujourd'hui">Aujourd'hui</a></li>
                    </ul>
                </div>
                <div id="mobile" onClick={this.handleClick}>
                    <i id="bar" className={this.state.clicked ? 'fa fa-times' : 'fas fa-bars'}></i>
                </div>
            </nav>
        </>
    )
}
}

export default NavBar