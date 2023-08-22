import React from 'react';
import './Home.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import { itemImages } from '../items';
import ItemType from '../types/item';

// eslint-disable-next-line react/prop-types
function Home({ items }) {
  return (
    <div className="home-component">
      {items.map((item) => (
        <Thumbnail
          key={item.itemId}
          image={itemImages[item.imageId]}
          title={item.title}
        />
      ))}
    </div>
  );
}

Home.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
};

export default Home;
