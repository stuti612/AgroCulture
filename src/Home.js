import React from "react";
import "./Home.css";
import Product from "./Product";
import Data from "./Data";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images.unsplash.com/photo-1565647952915-9644fcd446a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      <Data />
    </div>
  );
}

export default Home;
