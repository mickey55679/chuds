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

const NavigationBar = (props) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/" exact>
          <img src={logo} alt="Logo" className="logo" />
        </NavLink>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        onClick={props.handleToggle}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className={`nav-items ${props.isOpen ? "show-nav ml-auto" : ""}`}>
        <li className="nav-item">
          <NavLink
            to="/"
            exact
            className={props.activeLink === "/" ? "active-link" : ""}
            onClick={() => props.handleClick("/")}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/menu"
            exact
            className={props.activeLink === "/menu" ? "active-link" : ""}
            onClick={() => props.handleClick("/menu")}
          >
            Menu
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            exact
            className={props.activeLink === "/contact" ? "active-link" : ""}
            onClick={() => props.handleClick("/contact")}
          >
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <AuthenticationButton />
        </li>
        <li className="nav-item">
          <NavLink to="/checkout">
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{ color: "palevioletred" }}
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
