import { useState } from 'react';
//SECTIONS
import Home from './sections/Home';
import About from './sections/About';
import Resume from './sections/Resume';
// import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';

//COMPONENTS
import Header from './components/js/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
