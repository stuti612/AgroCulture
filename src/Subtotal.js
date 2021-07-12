import React from "react";
import { getTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const { cartItems, finalPrice } = useStateValue();
  console.log({ finalPrice });

  return (
    <div>
      <h1>Subtotal : {finalPrice}</h1>
    </div>
  );
}

export default Subtotal;
