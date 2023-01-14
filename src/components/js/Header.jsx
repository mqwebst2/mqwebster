import { useState } from 'react';
import logo from '/src/assets/images/mw-logo.png';
import '../css/Header.css';

export default function Header() {
  const [menu, setMenu] = useState(false);

  function toggle() {
    setMenu(!menu);
  }

  const navItems = [
    { link: '#home', text: 'Home' },
    { link: '#about', text: 'About' },
    { link: '#resume', text: 'Resume' },
    { link: '#portfolio', text: 'Portfolio' },
    { link: '#contact', text: 'Contact' },
  ];

  return (
    <div className="navbar">
      <div className={menu ? 'navbar-wrap open' : 'navbar-wrap'}>
        <div className="navbar-logo">
          <img src={logo} alt="Marques Webster" className="navbar-logo__img" />
        </div>

        <div className={menu ? 'navbar-menu open' : 'navbar-menu'}>
          <div className="navbar-menu__btn" onClick={toggle}>
            <div className="navbar-menu__btn-inner top"></div>
            <div className="navbar-menu__btn-inner mid"></div>
            <div className="navbar-menu__btn-inner low"></div>
          </div>

          <ul className="navbar-menu__items">
            {navItems.map((item) => {
              return (
                <li key={item.text}>
                  <a href={item.link} onClick={toggle}>
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
