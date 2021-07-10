import React from "react";
import { Link } from "react-router-dom";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, image, name, bPrice, rPrice }) {
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
        <Link to={`/policies/${id}`}>
          <button className="checkoutProduct__button--buy">
            Buying Options
          </button>
        </Link>
        <Link to={`/policies/${id}`}>
          <button className="checkoutProduct__button--rent">
            Renting Options
          </button>
        </Link>
        <button className="checkoutProduct__button--remove">
          Remove From Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
