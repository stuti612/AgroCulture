import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://media.gettyimages.com/photos/farmer-ploughing-field-picture-id1029301814?s=2048x2048"
      />

      <div className="home__row">
        <Product
          id="1234"
          image="https://cdn.pixabay.com/photo/2014/07/06/17/20/tractor-385681_960_720.jpg"
          name="Yellow Farm Tractor"
          bPrice={6.6}
          rPrice={15000}
        />
      </div>
    </div>
  );
}

export default Home;
