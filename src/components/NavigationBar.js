import React from "react";
import { NavLink } from "react-router-dom";
import  logo from "./images/Logochuds-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = ({
  activeLink,
  handleClick,
  handleToggle,
  isOpen,
  totalItemsInCart,
  isAuthenticated,
}) => {
  return (
    <nav className="navbar flex justify-between p-2 items-center z-[1000] relative ">
      <div className="logo w-[200px] h-auto">
        <NavLink to="/" exact>
          <img src={logo} alt="Logo" className="logo" />
        </NavLink>
      </div>
      <button
        className="navbar-toggler text-2xl m-1 p-2 z-[1100] cursor-pointer bg-transparent text-red"
        type="button"
        onClick={handleToggle}
      >
        <FontAwesomeIcon icon={isOpen ? faX : faBars} />
      </button>
      <ul
        className={`nav-items list-none flex gap-3 ml-auto ${
          isOpen ? "show-nav ml-auto" : ""
        }`}
      >
        <li className="nav-item decoration-0 p-2 font-medium text-blue hover:text-purple">
          <NavLink
            to="/"
            exact
            className={activeLink === "/" ? "active-link" : ""}
            onClick={() => handleClick("/")}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item decoration-0 p-2 font-medium text-blue hover:text-purple">
          <NavLink
            to="/about"
            exact
            className={activeLink === "/about" ? "active-link" : ""}
            onClick={() => handleClick("/about")}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item decoration-0 p-2 font-medium text-blue hover:text-purple">
          <NavLink
            to="/menu"
            exact
            className={activeLink === "/menu" ? "active-link" : ""}
            onClick={() => handleClick("/menu")}
          >
            Menu
          </NavLink>
        </li>
        <li className="nav-item decoration-0 p-2 font-medium text-blue hover:text-purple">
          <NavLink
            to="/contact"
            exact
            className={activeLink === "/contact" ? "active-link" : ""}
            onClick={() => handleClick("/contact")}
          >
            Contact
          </NavLink>
        </li>
        {isAuthenticated && (
          <li className="nav-item decoration-0 p-2 font-medium text-blue hover:text-purple">
            <NavLink
              to="/admin"
              exact
              className={activeLink === "/admin" ? "active-link" : ""}
              onClick={() => handleClick("/admin")}
            >
              Admin
            </NavLink>
          </li>
        )}
        <li className="nav-item decoration-0 p-2 font-medium text-blue hover:text-purple">
          <NavLink
            to="/login"
            exact
            className={activeLink === "/login" ? "active-link" : ""}
            onClick={() => handleClick("/login")}
          >
            Login
          </NavLink>
        </li>
        <li className="nav-item decoration-0 p-2 font-medium text-blue">
          <NavLink to="/checkout" className="cart-icon-link">
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
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
