import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Policy() {
  const { productId } = useParams;
  const { dispatch } = useStateValue();

  const getProductPolicy = (products, productId) =>
    products.find((product) => product.id === productId);

  // const data = await getProductPolicy(_, productId)

  return (
    <div>
      <div>
        {/* <button>Buy Now</button> */}
        <div className="radiobutton">
          <input
            id="radio1"
            name="radio"
            type="radio"
            onChange={() => dispatch({ type: "buyAtFullPrice", id: productId })}
          />
          <label for="radio1">Buy at Full Price</label>
        </div>
        <div className="radiobutton">
          <input
            id="radio2"
            name="radio"
            type="radio"
            onChange={() => dispatch({ type: "buyAtHalfPrice", id: productId })}
          />
          <label for="radio2">Buy at Half Price</label>
        </div>
      </div>
      <div>
        {/* <button>Rent Now</button> */}
        <div className="radiobutton">
          <input
            id="radio3"
            name="radio"
            type="radio"
            onChange={() => dispatch({ type: "rent", id: productId })}
          />
          <label for="radio3">Rent</label>
        </div>
      </div>
      <Link to="/checkout">
        <button>Go to Cart</button>
      </Link>
    </div>
  );
}

export default Policy;
