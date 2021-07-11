import { useContext, useReducer } from "react";
import { createContext } from "react";
import { reducer, initialState } from "./reducer";

export const StateContext = createContext({});

export const StateProvider = ({ children }) => {
  const [{ cartItems, finalPrice }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <StateContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
