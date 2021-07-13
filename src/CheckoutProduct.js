import React from "react";
import { Link } from "react-router-dom";
import "./CheckoutProduct.css";
import {
  BUY_AT_FULL_PRICE,
  BUY_AT_HALF_PRICE,
  REMOVE_FROM_CART,
  RENT,
} from "./reducer";
import { useStateValue } from "./StateProvider";

function CheckoutProduct(props) {
  const { dispatch } = useStateValue();

  return (
    <div className="checkoutProduct">
      <img src={props.img} alt={props.id} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__name">
          <Link
            style={{ color: "#c0392b", textDecoration: "none" }}
            to={`/product/${props.id}`}
          >
            <strong>{props.name}</strong>
          </Link>
        </p>
        <p className="checkoutProduct__bprice">
          Buy @ <small>Rs </small>
          <span>{props.buyprice}</span>
        </p>
        <p className="checkoutProduct__rprice">
          Rent @ <small>Rs </small>
          <span>{props.rprice} /month</span>
        </p>
      </div>

      <div className="checkoutProduct__button">
        <button
          className="checkoutProduct__button--buy"
          onClick={() => dispatch({ type: BUY_AT_FULL_PRICE, id: props.id })}
        >
          Buy At Full Price
        </button>
        <button
          className="checkoutProduct__button--buyHalf"
          onClick={() => dispatch({ type: BUY_AT_HALF_PRICE, id: props.id })}
        >
          Buy At 70%
        </button>
        <button
          className="checkoutProduct__button--rent"
          onClick={() => dispatch({ type: RENT, id: props.id })}
        >
          Rent
        </button>
        <button
          className="checkoutProduct__button--remove"
          onClick={() => dispatch({ type: REMOVE_FROM_CART, id: props.id })}
        >
          Remove From Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
