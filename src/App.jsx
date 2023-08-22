import React from 'react';
import './App.css';
import { items } from './items';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Header />
      <Home items={items} />
    </div>
  );
}

export default App;
