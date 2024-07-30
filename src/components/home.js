import React from "react";
import { Link } from "react-router-dom";
// import { chudsphoto } from "./images/index";
import MenuHighlights from "./MenuHighlights";
import barImage from './images/barimage.jpg'

const Home = (props) => {
  return (
    <>
      <div className="home-page">
        <div className="image-container">
          <img
            src={barImage}
            alt="Home"
            className="background-image"
          />
          <div className="overlay-text">
            {/* <img src={myLogo} alt="logo" className="my-logo-home" /> */}
            <p>
              CHUDs Pub and Grub is a family friendly restaurant that offers
              delicious homemade food and a full bar!
            </p>
            <Link to="/menu">
              <button
                className="button-27"
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
