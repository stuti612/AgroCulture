import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Buy from "./Buy";
import Rent from "./Rent";

function Policy() {
  const { productId } = useParams;

  const getProductPolicy = (products, productId) =>
    products.find((product) => product.id === productId);

  return (
    <div>
      <Buy />
      <Rent />
      <Link to="/checkout">
        <button>Go to Cart</button>
      </Link>
    </div>
  );
}

export default Policy;
