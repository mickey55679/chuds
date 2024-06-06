import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons"; // Import the phone icon

const Footer = () => {
  return (
    <footer className="footer">
      <div
        className="info-footer"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <div>
          {/* <a href="mailto:chudspubandgrub@gmail.com">
            chudspubandgrub@gmail.com
          </a> */}
        </div>

        {/* <div>Hours:</div>
        <div>Location: </div> */}
      </div>
      <div className="social-media">
        <a
          href="https://www.facebook.com/people/CHUDS-Pub-and-Grub/100084154931963/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="tel:+17124772469" // Format the phone number for use in a link
          className="phone-icon" // Optional, for styling
        >
          <FontAwesomeIcon icon={faPhone} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
