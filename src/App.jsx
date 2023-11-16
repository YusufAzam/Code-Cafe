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
    const callAxious = async () => {
      const result = await axios.get('/api/items');
      setItems(result.data);
    };
    callAxious();
    // axios.get('/api/items').then((result) => setItems(result.data))
    //   .catch(console.error);
  }, []);

  if (items.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <Router>
      <Header />
      {items.length === 0
        ? <div>Loading...</div>
        : (
          <Routes>
            <Route path="/details" element={<Details items={items} />}>
              <Route path=":id" element={<DetailItem items={items} />} />
              <Route index element={<div>No Item Selected</div>} />
            </Route>
            <Route path="/" element={<Home items={items} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
    </Router>
  );
}

export default App;
