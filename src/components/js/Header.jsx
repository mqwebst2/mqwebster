import { useState } from 'react';
import logo from '/src/assets/images/mw-logo.png';
import '../css/Header.css';

export default function Header() {
  const [menu, setMenu] = useState(false);

  function menuClick() {
    setMenu(!menu);
  }

  return (
    <div className="navbar">
      <div className={menu ? 'navbar-wrap open' : 'navbar-wrap'}>
        <div className="navbar-logo">
          <img src={logo} alt="Marques Webster" className="navbar-logo__img" />
        </div>

        <div className={menu ? 'navbar-menu open' : 'navbar-menu'}>
          <div className="navbar-menu__btn" onClick={menuClick}>
            <div className="navbar-menu__btn-inner top"></div>
            <div className="navbar-menu__btn-inner mid"></div>
            <div className="navbar-menu__btn-inner low"></div>
          </div>

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
