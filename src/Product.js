import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { ADD_TO_CART } from "./reducer";
import { Link } from "react-router-dom";

function Product({ id, image, name, bPrice, rPrice }) {
  const { dispatch } = useStateValue();

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
        <Link to={`/product/${id}`}>
          <p>
            <strong>{name}</strong>
          </p>
        </Link>
        <p className="product_bprice">
          Buy @ <small>Rs </small>
          <span>{bPrice}</span>
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
