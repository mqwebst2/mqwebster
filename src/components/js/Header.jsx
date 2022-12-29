import React from 'react';
import logo from '/src/assets/images/mw-logo.png';

export default function Header() {
  return (
    <div className="navbar">
      <div className="navbar-wrap">
        <div className="navbar-logo">
          <img src={logo} alt="Marques Webster" className="navbar-logo__img" />
        </div>

        <div className="navbar-menu">
          <ul className="navbar-menu__items">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
