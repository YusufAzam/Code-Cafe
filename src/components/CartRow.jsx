/* eslint-disable react/prop-types */
import PropTypes, { arrayOf } from 'prop-types';
import React from 'react';
import ItemType from '../types/item';
import { CartTypes } from '../reducers/cartReducer';

function CartRow({ cartItem, items, dispatch }) {
  const item = items.find((i) => i.itemId === cartItem.itemId);
  const removeItemFromCart = () => {
    dispatch({ type: CartTypes.REMOVE, itemId: item.itemId });
  };
  return (
    <tr>
      <td>{cartItem.quantity}</td>
      <td>
        {item.title}
      </td>
      <td>
        $
        {((item.salePrice ?? item.price) * cartItem.quantity).toFixed(2)}
      </td>
      <td>
        <button type="button" onClick={removeItemFromCart}> X </button>
      </td>
    </tr>
  );
}

export default CartRow;

CartRow.propType = {
  cartItem: PropTypes.shape({
    itemId: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
  }).isRequired,
  items: arrayOf(ItemType).isRequired,
  dispatch: PropTypes.func.isRequired,
};
