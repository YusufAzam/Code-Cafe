import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import ItemType from '../types/item';
import CartRow from './CartRow';

function Cart({ cart, items, dispatch }) {
  const subTotal = cart.length === 0 ? 0 : cart.reduce((acc, item) => {
    console.log(item.itemId);
    return acc;
    // return (item.quantity) + acc;
  });
  return (
    <div className="cart-component">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (<div> Your cart is empty </div>)
        : (
          <>
            <table>
              <thead>
                <tr>
                  <th>Quantity</th>
                  <th>Item</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <CartRow key={item.itemId} cartItem={item} items={items} dispatch={dispatch} />
                ))}
              </tbody>
            </table>
            <div>
              Subtotal: $
              {subTotal}
            </div>
          </>
        )}
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    itemId: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
  items: arrayOf(ItemType).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Cart;
