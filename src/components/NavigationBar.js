import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { logo } from "./images/index";

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/" onClick={() => handleSetActiveLink("home")}>
          <img src={logo} alt="Chuds" className="logo" />
        </NavLink>
      </div>
      <ul className="nav-items">
        <li
          className={`nav-item ${activeLink === "home" ? "active-link" : ""}`}
        >
          <NavLink to="/" exact onClick={() => handleSetActiveLink("home")}>
            Home
          </NavLink>
        </li>
        <li
          className={`nav-item ${activeLink === "menu" ? "active-link" : ""}`}
        >
          <NavLink to="/menu" onClick={() => handleSetActiveLink("menu")}>
            Menu
          </NavLink>
        </li>
        <li
          className={`nav-item ${
            activeLink === "contact" ? "active-link" : ""
          }`}
        >
          <NavLink to="/contact" onClick={() => handleSetActiveLink("contact")}>
            Contact
          </NavLink>
        </li>
        <li
          className={`nav-item ${activeLink === "more" ? "active-link" : ""}`}
        >
          <NavLink to="/more" onClick={() => handleSetActiveLink("more")}>
            More
          </NavLink>
        </li>
        <li
          className={`nav-item ${activeLink === "login" ? "active-link" : ""}`}
        >
          <NavLink to="/login" onClick={() => handleSetActiveLink("login")}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
