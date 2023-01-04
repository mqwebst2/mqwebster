import React from 'react';
import Header from './components/Header';
import Meme from './components/Meme';

import './MemeGenerator.css';

function MemeGenerator() {
  return (
    <div className="MemeGenerator">
      <Header />

      <Meme />
    </div>
  );
}

export default MemeGenerator;
