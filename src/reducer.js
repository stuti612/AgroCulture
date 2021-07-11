export const initialState = { cartItems: [], finalPrice: 0 };

export const ADD_TO_CART = "addToCart";
export const REMOVE_FROM_CART = "removeFromCart";
export const BUY_AT_HALF_PRICE = "buyAtHalfPrice";
export const BUY_AT_FULL_PRICE = "buyAtFullPrice";
export const RENT = "rent";
export const SET_PRICE = "setPrice";

export const getTotal = (items) => {
  return items.reduce((total, { price }) => total + price, 0);
};

export const reducer = (state, { type, id, item }) => {
  const { cartItems } = state;
  switch (type) {
    case ADD_TO_CART:
      console.log(item);
      console.log(state);
      return {
        ...state,
        cartItems: [...cartItems, item],
      };
    case REMOVE_FROM_CART:
      let newCart = [...cartItems];

      const index = cartItems.findIndex((cartItem) => cartItem.id === id);

      if (index >= 0) {
        newCart.splice(index, 1);
      }

      return {
        ...state,
        cartItems: newCart,
      };
    case SET_PRICE:
      return {
        ...state,
        finalPrice: item,
      };
    default:
      return state;
  }
};
