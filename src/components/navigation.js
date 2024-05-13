import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img
            src="https://scontent.ffsd2-1.fna.fbcdn.net/v/t39.30808-6/356211382_6543829322305672_8207548586151616097_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WLiqJiVW7pAQ7kNvgFg10if&_nc_ht=scontent.ffsd2-1.fna&oh=00_AfCTfmMsNtzekGu1kQrCn5ZVK-UjmiImZuuZodKOxowjiQ&oe=663ED6A2"
            alt="Chuds"
            className="logo"
          />
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
      </ul>
    </nav>
  );
};

export default NavigationBar;
