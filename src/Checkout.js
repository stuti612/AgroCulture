import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  const { cartItems } = useStateValue();

  return (
    <div className="checkout">
      {cartItems?.length === 0 ? (
        <div className="checkout__title">
          <h2>Your Cart is Empty</h2>
        </div>
      ) : (
        <div>
          <div className="checkout__left">
            <h2 className="checkout__title">Your Cart</h2>
            <div className="checkout__product">
              {cartItems.map((item) => (
                <CheckoutProduct {...item} />
              ))}
            </div>
          </div>
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
