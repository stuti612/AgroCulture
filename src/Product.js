import React from "react";
import "./Product.css";

function Product({ id, image, name, bPrice, rPrice }) {
  return (
    <div className="product">
      <img src={image} />
      <div className="product__info">
        <p>
          <strong>{name}</strong>
        </p>
        <p className="product_bprice">
          Buy @ <small>Rs </small>
          <span>{bPrice} lac</span>
        </p>
        <p className="product_rprice">
          Rent @ <small>Rs </small>
          <span>{rPrice}/month</span>
        </p>
      </div>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
