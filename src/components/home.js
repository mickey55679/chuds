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
            src="https://scontent.ffsd2-1.fna.fbcdn.net/v/t39.30808-6/436415599_407791682035993_8168994351067320526_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=zZ87kArm-zsQ7kNvgFWTw_S&_nc_ht=scontent.ffsd2-1.fna&oh=00_AYBPnfQqBpjwtERn5G_KJP33gx2DpTWOBa0lZHNpkLmkaA&oe=669F1AA9"
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
