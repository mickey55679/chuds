import React, { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";

const REVIEWS = [
  {
    uname: "Barb C",
    dateOf: "Apr 20, 2024",
    points: "⭐️⭐️⭐️⭐️⭐️",
    description: `Best grilled tuna and pesto chicken sandwich.
Great service
Great family atmosphere`,
    seeReview:
      "https://www.yelp.com/biz/chuds-pub-and-grub-larchwood?hrid=T8l_mqLbagC5Syvfpm4UMA&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
  },
  {
    uname: "Matt D",
    dateOf: "Nov 11, 2024",
    points: "⭐️⭐️⭐️⭐️⭐️",
    description:
      "Great servers, good environment. It's pretty classic bar-oriented food, but it's worth the drive out to visit.",
    seeReview:
      "https://www.yelp.com/biz/chuds-pub-and-grub-larchwood?hrid=vPdjC0TZ45UdINTOYFFm9g&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
  },
  {
    uname: "Kris S",
    dateOf: "Sep 10, 2023",
    points: "⭐️⭐️⭐️⭐️⭐️",
    description:
      "A group of us stopped here for lunch on a Sunday. Food was soooooo good. I had their patty melt and fries. I tried a friends Bloody Mary and it was bomb. They have so many options on the menu that we will be back for sure to try everything! Highly recommend!",
    seeReview:
      "https://www.yelp.com/biz/chuds-pub-and-grub-larchwood?hrid=hvHTiahlyFML8YIV6lRKfQ&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
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
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-red text-white p-2 rounded-full"
          onClick={() => handleClick("prev")}
        >
          <TiChevronLeftOutline size={20} />
        </button>
      )}
      <div className="review-card bg-white rounded-lg shadow-lg p-20 text-center transition-transform duration-500">
        <h2 className="text-2xl font-bold mb-2">{REVIEWS[active].uname}</h2>
        <p className="text-sm text-gray-500">{REVIEWS[active].dateOf}</p>
        <p className="mt-4 text-gray-700 m-4">{REVIEWS[active].description}</p>
        <p>{REVIEWS[active].points}</p>
        <a href={REVIEWS[active].seeReview} className="bg-red rounded-sm p-1 text-white">See Review</a>
      </div>
      {active < REVIEWS.length - 1 && (
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-red text-white p-2 rounded-full"
          onClick={() => handleClick("next")}
        >
          <TiChevronRightOutline size={20} />
        </button>
      )}
    </div>
  );
};

export default Carousel;
