import React from 'react';
import "./Navbar.scss";
import logo from '../../logo.png';

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo"/>
            <ul className="nav-list">
                <li><a href="/" className="nav-link">Home</a></li>
                <li><a href="/" className="nav-link">About</a></li>
                <li><a href="/" className="nav-link active">Toures</a></li>
            </ul>
        </nav>
    )
}
 