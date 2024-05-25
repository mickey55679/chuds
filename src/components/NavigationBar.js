import React from "react";
import { NavLink } from "react-router-dom";
import { logo } from "./images/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = (props) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/" exact>
          <img src={logo} alt="Chuds" className="logo" />
        </NavLink>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        onClick={props.handleToggle}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className={`nav-items ${props.isOpen ? "show-nav" : ""}`}>
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
          {/* <NavLink
            to="/more"
            exact
            className={props.activeLink === "/more" ? "active-link" : ""}
            onClick={() => props.handleClick("/more")}
          >
            More
          </NavLink> */}
        </li>
        <li className="nav-item">
          <NavLink
            to="/login"
            exact
            className={props.activeLink === "/login" ? "active-link" : ""}
            onClick={() => props.handleClick("/login")}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
