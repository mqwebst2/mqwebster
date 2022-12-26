import React from 'react';
import logo from '/src/assets/images/mw-logo.png';
import '../css/Header.css';

export default function Header() {
  return (
    <div className='navbar'>
      <div className='navbar-wrap'>
        <div className='navbar-logo'>
          <img src={logo} alt='Marques Webster' className='navbar-logo__img' />
        </div>

        <div className='navbar-menu'>
          <ul className='navbar-menu__items'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Home</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
