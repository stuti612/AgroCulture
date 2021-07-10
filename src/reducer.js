export const initialState = { cartItems: [] };

export const ADD_TO_CART = "addToCart";
export const REMOVE_FROM_CART = "removeFromCart";

export const reducer = (state, { type, id, item }) => {
  const { cartItems } = state;
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...cartItems, item],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: cartItems.filter((item) => item.id !== id),
      };
    default:
      return state;
  }
};
