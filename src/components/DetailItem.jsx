/* eslint-disable react/button-has-type */
import React from 'react';
import './DetailItem.css';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CartTypes } from '../reducers/cartReducer';
import { itemImages } from '../items';
import ItemType from '../types/item';

// eslint-disable-next-line react/prop-types
function DetailItem({ items, dispatch }) {
  const { id } = useParams();
  const detailItem = items.find((item) => item.itemId === id);

  const addItemToCart = () => {
    dispatch({ type: CartTypes.ADD, itemId: detailItem.itemId });
  };

  return (
    <div className="detail-item-component">
      {detailItem ? (
        <>
          <img
            className="details-image"
            src={itemImages[detailItem.imageId]}
            alt={detailItem.title}
          />
          <h2>{detailItem.title}</h2>
          {!!detailItem.description && <h6>{detailItem.description}</h6>}
          <div>
            $
            {detailItem.salesPrice ?? detailItem.price.toFixed(2)}
          </div>
          <button onClick={addItemToCart}>Add to cart</button>
        </>
      )
        : <h1>Unknown item</h1>}
    </div>
  );
}

DetailItem.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default DetailItem;
