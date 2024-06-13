import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faCar } from "@fortawesome/free-solid-svg-icons"; // Import the car icon

const Footer = () => {
  return (
    <footer className="footer">
      <div
        className="info-footer"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        {/* Add any other information here */}
      </div>
      <div
        className="social-media"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
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
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=403+Holder+St,+Larchwood,+IA+51241"
          target="_blank"
          rel="noopener noreferrer"
          className="car-icon" // Optional, for styling
        >
          <FontAwesomeIcon icon={faCar} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
