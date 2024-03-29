import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import ItemType from '../types/item';
import CartRow from './CartRow';
import './Cart.css';

function Cart({ cart, items, dispatch }) {
  const subTotal = cart.reduce((acc, item) => {
    const detailItem = items.find((i) => i.itemId === item.itemId);
    const itemPrice = detailItem.salePrice ?? detailItem.price;
    return item.quantity * (itemPrice + acc);
  }, 0);
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
            <h2>Checkout</h2>
            <form>
              <label htmlFor="name">
                Name
                <input id="name" type="text" />
              </label>
              <label htmlFor="phone">
                Phone Number
                <input id="phone" type="tel" />
              </label>
              <label htmlFor="zipCode">
                Zip Code
                <input id="zipCode" type="text" maxLength={5} inputMode="numeric" />
              </label>
              <button type="submit">
                Order now
              </button>
            </form>
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
