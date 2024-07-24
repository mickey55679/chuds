import React from "react";
import { Link } from "react-router-dom";
// import { chudsphoto } from "./images/index";
import MenuHighlights from "./MenuHighlights";
// import myLogo from './images/chudsgroup-removebg-preview.png'

const Home = (props) => {
  return (
    <>
      <div className="home-page">
        <div className="image-container">
          <img
            src="https://cdn.pixabay.com/photo/2017/04/19/20/16/pub-2243488_1280.jpg"
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
