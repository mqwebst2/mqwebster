import React from 'react';
import Home from '../sections/Home';
import About from '../sections/About';
import Resume from '../sections/Resume';
import Portfolio from '../sections/Portfolio';
import Contact from '../sections/Contact';
import Header from '../components/js/Header';

export default function Layout() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </>
  );
}
