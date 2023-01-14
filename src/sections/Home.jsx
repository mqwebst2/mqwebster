import React from 'react';
import homeImage from '/src/assets/images/home.svg';

export default function Home() {
  return (
    <section id="home">
      <div className="home-bg">
        <img src={homeImage} />
      </div>

      <div className="wrap">
        <span className="subheading">Hey, I'm...</span>

        <div className="name-banner">
          <ul className="name-banner__items">
            <li>Marques Q. Webster</li>
          </ul>
        </div>

        <h1>I'm a Frontend Software Developer!</h1>
      </div>
    </section>
  );
}
