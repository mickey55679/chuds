import React from "react";
import { NavLink } from "react-router-dom";
import { logo } from "./images/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return isAuthenticated ? (
    <button
      className="login-logout-buttons"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Logout
    </button>
  ) : (
    <button
      className="login-logout-buttons"
      onClick={() => loginWithRedirect()}
    >
      Login
    </button>
  );
};

const NavigationBar = ({
  activeLink,
  handleClick,
  handleToggle,
  isOpen,
  totalItemsInCart,
}) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/" exact>
          <img src={logo} alt="Logo" className="logo" />
        </NavLink>
      </div>
      <button className="navbar-toggler" type="button" onClick={handleToggle}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className={`nav-items ${isOpen ? "show-nav ml-auto" : ""}`}>
        <li className="nav-item">
          <NavLink
            to="/"
            exact
            className={activeLink === "/" ? "active-link" : ""}
            onClick={() => handleClick("/")}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/menu"
            exact
            className={activeLink === "/menu" ? "active-link" : ""}
            onClick={() => handleClick("/menu")}
          >
            Menu
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            exact
            className={activeLink === "/contact" ? "active-link" : ""}
            onClick={() => handleClick("/contact")}
          >
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <AuthenticationButton />
        </li>
        <li className="nav-item">
          <NavLink to="/checkout" className="cart-icon-link">
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{ color: "#ef1511" }}
            />
            {totalItemsInCart > 0 && (
              <span className="cart-badge">{totalItemsInCart}</span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
