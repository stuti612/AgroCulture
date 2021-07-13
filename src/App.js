import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import ProductDetail from "./ProductDetail";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";

function App() {
  const { user, dispatch } = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("the user is...", authUser);
        //The user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //The user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
