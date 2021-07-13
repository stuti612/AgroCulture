import React from "react";
import { getTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";

function Subtotal() {
  const { cartItems } = useStateValue();

  return (
    <div className="subtotal">
      <div className="subtotal__text">
        <p>
          Subtotal ({cartItems.length} items) : Rs
          <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            {" "}
            {getTotal(cartItems)}
          </span>
        </p>
      </div>
      <button className="subtotal__btn">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
