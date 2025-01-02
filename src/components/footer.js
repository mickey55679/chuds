import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faCar } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="text-light bg-red p-2 text-center font-sans bg-red-500 rounded-md">
      {/* Footer Bottom */}
      <div className="flex flex-col items-center">
        {/* Hours */}
        <ul className="list-none p-0 space-y-1 text-sm text-white">
          <li>Mon Closed</li>
          <li>Tue 10:30 AM - 2:00 PM</li>
          <li>Wed 10:20 AM - 2:00 PM</li>
          <li>Thu 10:20 AM - 2:00 PM</li>
          <li>Fri 10:20 AM - 2:00 PM</li>
          <li>Sat 10:20 AM - 2:00 PM</li>
          <li>Sun 10:20 AM - 2:00 PM</li>
        </ul>

        {/* Social Media Links */}
        <div className="flex justify-center gap-3 mt-2">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="tel:+17124772469" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faPhone} size="lg" />
          </a>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=403+Holder+St,+Larchwood,+IA+51241"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faCar} size="lg" />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-2 text-white text-xs">
          © Copyright. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
