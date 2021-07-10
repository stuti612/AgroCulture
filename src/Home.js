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
          image="https://images.unsplash.com/photo-1532929900024-6413d2ed39c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
          name="Yellow Farm Tractor"
          bPrice={6.6}
          rPrice={15000}
        />
      </div>
    </div>
  );
}

export default Home;
