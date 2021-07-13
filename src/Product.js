import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { ADD_TO_CART } from "./reducer";
import { Link } from "react-router-dom";

function Product(props) {
  const { dispatch } = useStateValue();

  const addToCart = () => {
    dispatch({
      type: ADD_TO_CART,
      item: {
        ...props,
        price: props.buyprice,
      },
    });
  };

  return (
    <div className="product">
      <img src={props.img} alt={props.id} />
      <div className="product__info">
        <Link
          style={{ textDecoration: "none", color: "#c0392b" }}
          to={`/product/${props.id}`}
        >
          <p>
            <strong>{props.name}</strong>
          </p>
        </Link>
        <p className="product_bprice">
          Buy @ <small>Rs </small>
          <span>{props.buyprice}</span>
        </p>
        <p className="product_rprice">
          Rent @ <small>Rs </small>
          <span>{props.rprice}/month</span>
        </p>
      </div>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
