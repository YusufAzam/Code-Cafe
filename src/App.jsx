import React, { useEffect, useState, useReducer } from 'react';
import axios from 'axios';
import {
  Route,
  BrowserRouter as Router, Routes,
} from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { cartReducer, initialCartState } from 'reducers/cartReducer';
// eslint-disable-next-line import/no-unresolved
import Cart from 'components/Cart';
import DetailItem from './components/DetailItem';
import Details from './components/Details';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  const [items, setItems] = useState([]);
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  useEffect(() => {
    const callAxious = async () => {
      const result = await axios.get('/api/items');
      setItems(result.data);
    };
    callAxious();
  }, []);

  if (items.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <Router>
      <Header cart={cart} />
      {items.length === 0
        ? <div>Loading...</div>
        : (
          <Routes>
            <Route path="/details" element={<Details items={items} />}>
              <Route path=":id" element={<DetailItem items={items} dispatch={dispatch} />} />
              <Route index element={<div>No Item Selected</div>} />
            </Route>
            <Route path="/cart" element={<Cart cart={cart} items={items} dispatch={dispatch} />} />
            <Route path="/" element={<Home items={items} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
    </Router>
  );
}

export default App;
