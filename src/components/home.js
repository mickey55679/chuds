import React from "react";
import { Link } from "react-router-dom";
import MenuHighlights from "./MenuHighlights";


const Home = (props) => {
  return (
    <>
      <div className="home-page">
        <div className="image-container">
          <img
            src="https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366_1280.jpg"
            alt="Home"
            className="background-image"
          />
          <div className="overlay-text">
            <p>
              Chuds Pub and Grub is a family friendly restaurant that offers
              delicious homemade food and a full bar!
            </p>
            <Link to="/menu">
              <button
                className="button-home"
                onClick={() => props.handleClick("/menu")}
              >
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <MenuHighlights />
    </>
  );
};

export default Home;
