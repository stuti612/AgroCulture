import firebase from "./firebase";
import React, { useEffect } from "react";
import "./Product.css";
import Product from "./Product.js";
import { useStateValue } from "./StateProvider";

function Data() {
  const { productsDB, setProductsDB } = useStateValue();

  const ref = firebase.firestore().collection("products");

  function getproduct() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setProductsDB(items);
    });
  }
  useEffect(() => {
    getproduct();
  }, []);

  console.log(productsDB);

  return (
    <div>
      <div className="home__row">
        {productsDB.map((product) => (
          <Product {...product} />
        ))}
      </div>
    </div>
  );
}

export default Data;
