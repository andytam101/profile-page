import React from 'react';
import { Link } from 'react-scroll';
import './App.css';
import './Navbar.css'


function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#main">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experiences">Experiences</a></li>
                <li><a href="#tutoring">Tutoring</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;