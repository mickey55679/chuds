import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faCar} from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top"></div>
      <div className="footer-bottom">
        <div className="social-media">
          <ul>
            <li>
              Mon Closed
            </li>
            <li>Tue 10:30 AM - 2:00 PM</li>
            <li>Wed 10:20 AM - 2:00 PM</li>
            <li>Thu 10:20 AM - 2:00 PM</li>
            <li>Fri 10:20 AM - 2:00 PM</li>
            <li>Sat 10:20 AM - 2:00 PM</li>
            <li>Sun 10:20 AM - 2:00 PM</li>
          </ul>
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
