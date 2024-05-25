import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { logo } from "./images/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleToggle = () => setIsOpen(!isOpen);

  const handleClick = (path) => {
    setActiveLink(path);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/" exact>
          <img src={logo} alt="Chuds" className="logo" />
        </NavLink>
      </div>
      <button className="navbar-toggler" type="button" onClick={handleToggle}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className={`nav-items ${isOpen ? "show-nav" : ""}`}>
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
          <NavLink
            to="/more"
            exact
            className={activeLink === "/more" ? "active-link" : ""}
            onClick={() => handleClick("/more")}
          >
            More
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/login"
            exact
            className={activeLink === "/login" ? "active-link" : ""}
            onClick={() => handleClick("/login")}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
