import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

import './AirbnbApp.css';

function AirbnbApp() {
  const dataElements = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div className="App">
      <Navbar />

      <Hero />

      <div className="card-grid">
        <div className="card-grid__wrap">{dataElements}</div>
      </div>
    </div>
  );
}

export default AirbnbApp;
