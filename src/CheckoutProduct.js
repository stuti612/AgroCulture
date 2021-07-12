import React from "react";
import { Link } from "react-router-dom";
import "./CheckoutProduct.css";
import { REMOVE_FROM_CART } from "./reducer";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, name, bPrice, rPrice }) {
  const { dispatch } = useStateValue();

  return (
    <div className="checkoutProduct">
      <img src={image} alt={id} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__name">
          <strong>{name}</strong>
        </p>
        <p className="checkoutProduct__bprice">
          Buy @ <small>Rs </small>
          <span>{bPrice} lac</span>
        </p>
        <p className="checkoutProduct__rprice">
          Rent @ <small>Rs </small>
          <span>{rPrice}/month</span>
        </p>
      </div>

      <div className="checkoutProduct__button">
        <button
          className="checkoutProduct__button--buy"
          onClick={() => dispatch({ type: REMOVE_FROM_CART, id: id })}
        >
          Buy At Full Price
        </button>
        <button
          className="checkoutProduct__button--buyHalf"
          onClick={() => dispatch({ type: REMOVE_FROM_CART, id: id })}
        >
          Buy At Half Price
        </button>
        <button
          className="checkoutProduct__button--rent"
          onClick={() => dispatch({ type: REMOVE_FROM_CART, id: id })}
        >
          Rent
        </button>
        <button
          className="checkoutProduct__button--remove"
          onClick={() => dispatch({ type: REMOVE_FROM_CART, id: id })}
        >
          Remove From Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
