import React from "react";
import { Link } from "react-router-dom";
import {logo} from './index'

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Chuds" className="logo" />
        </Link>
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/menu">Menu</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/more">More</Link>
        </li>
        <li className="nav-item">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
