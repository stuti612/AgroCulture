import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  const { cartItems, dispatch } = useStateValue();

  return (
    <div className="checkout">
      {cartItems?.length === 0 ? (
        <div className="checkout__title">
          <h2>Your Cart is Empty</h2>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Cart</h2>
          <div className="checkout__product">
            {cartItems.map((item) => (
              <CheckoutProduct
                id={item.id}
                image={item.image}
                name={item.name}
                bPrice={item.bPrice}
                rPrice={item.rPrice}
              />
            ))}
          </div>

          <div>{/* <Subtotal /> */}</div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
