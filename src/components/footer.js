import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faFlickr,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faCar, faRss } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
      </div>
      <div className="footer-bottom">
        <div className="social-media">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
      
          <a href="tel:+17124772469">
            <FontAwesomeIcon icon={faPhone} size="2x" />
          </a>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=403+Holder+St,+Larchwood,+IA+51241"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faCar} size="2x" />
          </a>
        </div>
        <p>© Copyright. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
