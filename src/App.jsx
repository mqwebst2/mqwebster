import { useState, useEffect } from 'react';
import Header from './components/js/Header';
import Home from './sections/Home';
import About from './sections/About';
import Resume from './sections/Resume';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import './App.css';

function App() {
  const [visitors, setVisitors] = useState('');

  useEffect(() => {
    const apiURL =
      'https://rty7kmnenc.execute-api.us-east-2.amazonaws.com/api/siteViewCount';

    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        setVisitors(data.body);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Contact visitor={visitors} />
    </div>
  );
}

export default App;
