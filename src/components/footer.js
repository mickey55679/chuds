import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faCar } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="text-light p-2.5 text-center font-sans bg-red-500 rounded-md">
      {/* Footer Top */}
      <div className="flex justify-around pb-2.5">
        {/* You can add other elements or content here if needed */}
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        {/* Social Media and Contact Info */}
        <div className="social-media">
          <ul className="list-none p-0 space-y-1.25">
            <li className="p-1.25">Mon Closed</li>
            <li className="p-1.25">Tue 10:30 AM - 2:00 PM</li>
            <li className="p-1.25">Wed 10:20 AM - 2:00 PM</li>
            <li className="p-1.25">Thu 10:20 AM - 2:00 PM</li>
            <li className="p-1.25">Fri 10:20 AM - 2:00 PM</li>
            <li className="p-1.25">Sat 10:20 AM - 2:00 PM</li>
            <li className="p-1.25">Sun 10:20 AM - 2:00 PM</li>
          </ul>

          {/* Social Media Links */}
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="tel:+17124772469"
              className="text-white hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faPhone} size="2x" />
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=403+Holder+St,+Larchwood,+IA+51241"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faCar} size="2x" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-4 text-white">© Copyright. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
