import React, { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import chudsBackground from "./images/chudsoutside.jpg";

const About = () => {
  const REVIEWS = [
    {
      uname: "DuggerSD S",
      dateOf: "Sep 21, 2024",
      points: "5 Stars",
      description: `This was our first time visiting Chuds, so we really did not know what to expect. We arrived early and it was not very crowded. The waitress came by and was very friendly without being overbearing. She was able to answer our questions. I had to ask what a Slawsome Chud Burger was. My wife ordered a bacon chicken flatbread. There are no sides that come with the sandwiches, a la carte. I asked the Kellie, the waitress if I needed a side. She told me with what was on the burger, probably not. I really appreciated that. I did see some of the sides offered that other customers ordered. They were generous in their serving size. When our meals arrived, I was glad I skipped the side. That burger had to be 4" tall and maybe 5". This was a first for me. I ate the burger with a knife and fork! My burger was very good--not overdone or undercooked. My wife enjoyed her flatbread. I thanked our waitress for suggesting just the sandwich. I would have been more full than I would have been comfortable being. The food, service and atmosphere are all very nice. We look forward to coming again.`,
    },
    {
      uname: "Matt D",
      dateOf: "Nov 11, 2024",
      points: "5 Stars",
      description:
        "Great servers, good environment. It's pretty classic bar-oriented food, but it's worth the drive out to visit.",
    },
    {
      uname: "John K",
      dateOf: "Dec 2, 2024",
      points: "4 Stars",
      description:
        "The burgers are good, and the ambiance is cozy. Service was a bit slow, but overall, a great experience.",
    },
  ];

  const Carousel = () => {
    const [active, setActive] = useState(0);

    const handleClick = (direction) => {
      if (direction === "prev" && active > 0) {
        setActive(active - 1);
      } else if (direction === "next" && active < REVIEWS.length - 1) {
        setActive(active + 1);
      }
    };

    return (
      <div className="carousel-container relative w-full max-w-lg mx-auto">
        {active > 0 && (
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
            onClick={() => handleClick("prev")}
          >
            <TiChevronLeftOutline size={24} />
          </button>
        )}
        <div className="review-card bg-white rounded-lg shadow-lg p-6 text-center transition-transform duration-500">
          <h2 className="text-2xl font-bold mb-2">{REVIEWS[active].uname}</h2>
          <p className="text-sm text-gray-500">{REVIEWS[active].dateOf}</p>
          <p className="mt-4 text-gray-700">{REVIEWS[active].description}</p>
        </div>
        {active < REVIEWS.length - 1 && (
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
            onClick={() => handleClick("next")}
          >
            <TiChevronRightOutline size={24} />
          </button>
        )}
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
          CHUDS is a veteran-owned and operated restaurant with homemade food.
          We are known for our delicious menu selection and great service. We
          offer a full bar, flatbreads, hand-pattied burgers, sandwiches, and a
          good variety of other options. If you are looking for a short drive
          out of the city, our place is what you are looking for.
        </p>
      </div>
      <Carousel />
    </div>
  );
};

export default About;
