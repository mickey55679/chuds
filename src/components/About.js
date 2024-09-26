import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-3xl text-center p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 mb-4">
          Welcome to our website! We are a passionate team of developers,
          designers, and creators dedicated to delivering the best digital
          experiences.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          Our mission is to provide innovative solutions and excellent service
          that helps our clients succeed in their goals.
        </p>
        <p className="text-lg text-gray-600">
          Whether it's building high-quality web applications or offering
          top-tier customer service, we're here to help you achieve your vision.
        </p>
      </div>
    </div>
  );
};

export default About;
