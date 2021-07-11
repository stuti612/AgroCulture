import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Policy() {
  const { productId } = useParams;
  const { dispatch } = useStateValue();
  const [currentPrice, setCurrentPrice] = useState(null);
  const [value, setValue] = useState({
    halfPrice: 0,
    fullPrice: 0,
    rentPrice: 0,
  });
  const onClick = () => {
    if (!currentPrice) {
      return alert("Select Value !!");
    }
    dispatch({
      type: "setPrice",
      item: currentPrice,
    });
  };

  useEffect(() => {
    (async () => {
      //fetch from here
      const data = { rprice: 22, bprice: 25 };
      // const data = await getProductPolicy(_, productId);
      setValue({
        ...value,
        halfPrice: data.bprice / 2,
        fullPrice: data.bprice,
        rentPrice: data.rprice,
      });
    })();
  }, []);

  const getProductPolicy = (products, productId) =>
    products.find((product) => product.id === productId);

  return (
    <div>
      <div>
        <div className="radiobutton">
          <input
            id="radio1"
            name="radio"
            type="radio"
            price={value.fullPrice}
            onChange={(e) => {
              setCurrentPrice(e.target.attributes[3].nodeValue);
            }}
          />
          <label for="radio1">Buy at Full Price</label>
        </div>
        <div className="radiobutton">
          <input
            id="radio2"
            name="radio"
            type="radio"
            price={value.halfPrice}
            onChange={(e) => {
              setCurrentPrice(e.target.attributes[3].nodeValue);
            }}
          />
          <label for="radio2">Buy at Half Price</label>
        </div>
      </div>
      <div>
        <div className="radiobutton">
          <input
            id="radio3"
            name="radio"
            type="radio"
            price={value.rentPrice}
            onChange={(e) => {
              setCurrentPrice(e.target.attributes[3].nodeValue);
            }}
          />
          <label for="radio3">Rent</label>
        </div>
      </div>
      <Link onClick={onClick} to="/checkout">
        <button>Go to Cart</button>
      </Link>
    </div>
  );
}

export default Policy;
