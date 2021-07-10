import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { ADD_TO_CART } from "./reducer";

function Product({ id, image, name, bPrice, rPrice }) {
  const { cartItems, dispatch } = useStateValue();

  const addToCart = () => {
    dispatch({
      type: ADD_TO_CART,
      item: {
        id,
        image,
        name,
        bPrice,
        rPrice,
      },
    });
  };

  return (
    <div className="product">
      <img src={image} alt={id} />
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
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
