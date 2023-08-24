import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Route,
  BrowserRouter as Router, Routes,
} from 'react-router-dom';
import DetailItem from './components/DetailItem';
import Details from './components/Details';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/api/items').then((result) => setItems(result.data))
      // eslint-disable-next-line no-console
      .catch(console.error);
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/details" element={<Details items={items} />}>
          <Route path=":id" element={<DetailItem />} />
          <Route index element={<div>No Item Selected</div>} />
        </Route>
        <Route path="/" element={<Home items={items} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
