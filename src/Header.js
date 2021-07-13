import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from "./StateProvider";

function Header() {
  const { cartItems } = useStateValue();
  return (
    <nav className="header">
      <Link to="/" className="header__logoLink header__hover">
        <div className="header__logo">AgroCulture</div>
      </Link>

      <div className="header__nav">
        <Link
          to="/checkout"
          className="header__link header__cart header__hover"
        >
          <FontAwesomeIcon className="header__option" icon={faShoppingCart} />
          <span>{cartItems.length}</span>
        </Link>
        <Link to="/login" className="header__link header__hover">
          <FontAwesomeIcon className="header__option" icon={faUser} />
        </Link>
      </div>
    </nav>
  );
}

export default Header;
