import React from "react";
import { getTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const { cartItems } = useStateValue;
  console.log(cartItems);

  return (
    <div>
      <h1>Subtotal : {getTotal(cartItems)}</h1>
    </div>
  );
}

export default Subtotal;
