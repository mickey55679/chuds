import React, { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import chudsBackground from './images/chudsoutside.jpg';

const About = () => {
  const REVIEWS = [
    {
      uname: "DuggerSD S",
      dateOf: "Sep 21, 2024",
      points: "5 Stars",
      description: `This was our first time visiting Chuds, so we really did not know what to expect. We arrived early and it was not very crowded. The waitress came by and was very friendly without being overbearing. She was able to answer our questions. I had to ask what a Slawsome Chud Burger was. My wife ordered a bacon chicken flatbread. There are no sides that come with the sandwiches, a la carte. I asked the Kellie, the waitress if I needed a side. She told me with what was on the burger, probably not. I really appreciated that. I did see some of the sides offered that other customers ordered. They were generous in their serving size. When our meals arrived, I was glad I skipped the side. That burger had to be 4" tall and maybe 5". This was a first for me. I ate the burger with a knife and fork! My burger was very good--not overdone or undercooked. My wife enjoyed her flatbread. I thanked our waitress for suggesting just the sandwich. I would have been more full than I would have been comfortable being. The food, service and atmosphere are all very nice. We look forward to coming again.`,
    },

  ];

  const MAX_VISIBILITY = 2;

  const Carousel = () => {
    const [active, setActive] = useState(0);

    const handleClick = (index) => {
      setActive(index);
    };

    return (
      <div className="carousel-container flex items-center justify-center">
        <div className="relative w-full max-w-4xl">
          {active > 0 && (
            <button
              className="absolute left-0 arrow-button"
              onClick={() => handleClick(active - 1)}
              style={{
                backgroundColor: "black",
                border: "2px solid white",
                borderRadius: "50%",
                padding: "0.5rem",
                transition: "background-color 0.3s",
              }}
            >
              <TiChevronLeftOutline className="text-white" />
            </button>
          )}
          <div className="cards-container flex justify-center items-center">
            {REVIEWS.map((review, index) => (
              <div
                key={index}
                className={`relative w-full p-6 transition-transform duration-500 ${
                  index === active ? "block" : "hidden"
                }`}
                style={{
                  transform: `translateX(${(index - active) * 100}%)`,
                }}
              >
                <div className="p-8 bg-white rounded-lg shadow-md text-center">
                  <h2 className="text-2xl font-bold mb-2">{review.uname}</h2>
                  <p className="text-sm text-gray-500">{review.dateOf}</p>
                  <p className="mt-4 text-gray-700">{review.description}</p>
                </div>
              </div>
            ))}
          </div>
          {active < REVIEWS.length - 1 && (
            <button
              className="absolute right-0 arrow-button"
              onClick={() => handleClick(active + 1)}
              style={{
                backgroundColor: "black",
                border: "2px solid white",
                borderRadius: "50%",
                padding: "0.5rem",
                transition: "background-color 0.3s",
              }}
            >
              <TiChevronRightOutline className="text-white" />
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${chudsBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-3xl text-center p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 mb-4">
          CHUDS is a veteran owned and ran restaurant with homemade food...
        </p>
        <p className="text-lg text-gray-600">
          Whether it's building high-quality web applications or offering
          top-tier customer service, we're here to help you achieve your vision.
        </p>
      </div>

      <Carousel />
    </div>
  );
};

export default About;
