import React from "react";
import { Link } from "react-router-dom";
import chuds from '../chuds.jpeg'

const Home = () => {
  return (
    <div className="home-page">
      <div className="image-container">
        <img
          src={chuds}
          alt="Home"
          className="background-image"
        />
        <div className="overlay-text">
          <p>
            CHUDs Pub and Grub is a family friendly restaurant that offers
            delicious homemade food and a full bar!
          </p>
          <Link to="/menu">
            <button className="button-30">Check out the Menu</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
