import PropTypes from 'prop-types';
import { itemImages } from '../items';
import ItemType from '../types/item';
import Thumbnail from './Thumbnail';
import './Details.css';
// eslint-disable-next-line import/order
import React from 'react';

function Details({ items }) {
  return (
    <div className="details-component">
      <div>
        {/* display item */}
      </div>
      <div className="details-component-sidebar">
        {items.map((item) => (
          <Thumbnail
            key={item.itemId}
            image={itemImages[item.imageId]}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}

Details.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
};

export default Details;
