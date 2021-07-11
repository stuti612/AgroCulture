import firebase from "./firebase";
import React, { useState, useEffect } from "react";
import "./Product.css";
import Product from "./Product.js";

function Data() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const ref = firebase.firestore().collection("products");

  function getproduct() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setProducts(items);
      setLoading(false);
    });
  }
  useEffect(() => {
    getproduct();
  }, []);
  return (
    <div>
      <div className="home__row">
        {products.map((product) => (
          <Product
            id="1234"
            image={product.img}
            name={product.name}
            bPrice={product.buyprice}
            rPrice={product.rprice}
          />
        ))}
      </div>
    </div>
  );
}

export default Data;
