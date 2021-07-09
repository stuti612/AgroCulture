import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <nav className="header">
      {/* logo */}

      <Link to="/" className="header__logoLink">
        <div className="header__logo">AgroCulture</div>
      </Link>

      {/* search bar */}

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <FontAwesomeIcon
          className="header__searchIcon"
          icon={faSearch}
          size="2x"
        />
      </div>

      {/* login and cart icons */}

      <div className="header__nav">
        <Link to="/" className="header__link header__cart">
          <FontAwesomeIcon
            className="header__option"
            icon={faShoppingCart}
            size="2x"
          />
          <span>0</span>
        </Link>
        <Link to="/login" className="header__link">
          <FontAwesomeIcon className="header__option" icon={faUser} size="2x" />
        </Link>
      </div>
    </nav>
  );
}

export default Header;
