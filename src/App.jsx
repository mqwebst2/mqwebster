import React from 'react';
import Layout from './pages/Layout';
import { functions } from './projects';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const routeElements = functions.map((item) => (
    <Route key={item.name} path={`/project/${item.name}`} element={item()} />
  ));

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          {routeElements}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
