import { useContext, useReducer, useState } from "react";
import { createContext } from "react";
import { reducer, initialState } from "./reducer";

export const StateContext = createContext({});

export const StateProvider = ({ children }) => {
  const [productsDB, setProductsDB] = useState([]);

  const [{ cartItems, finalPrice }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <StateContext.Provider
      value={{ cartItems, finalPrice, dispatch, productsDB, setProductsDB }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
