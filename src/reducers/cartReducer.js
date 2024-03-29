/* eslint-disable no-unused-vars */
export const initialCartState = [];
export const CartTypes = {
  ADD: 'Add',
  REMOVE: 'Remove',
};

// eslint-disable-next-line max-len
const findItem = (state, exisitngItemId) => state.find((cartObject) => cartObject.itemId === exisitngItemId);

// eslint-disable-next-line default-param-last
export const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case CartTypes.ADD: {
      if (findItem(state, action.itemId)) {
        return state.map((item) => (item.itemId === action.itemId
          ? { ...item, quantity: item.quantity + 1 }
          : item));
      }
      return [
        ...state,
        { itemId: action.itemId, quantity: 1 },
      ];
    }
    case CartTypes.REMOVE: {
      return state.filter((item) => item.itemId !== action.itemId);
    }
    default: {
      throw new Error(`Invalid action types ${action.type}`);
    }
  }
};
