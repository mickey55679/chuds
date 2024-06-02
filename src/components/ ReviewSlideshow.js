import React, { useState, useEffect } from "react";

const reviews = [
  {
    id: 1,
    author: "John Doe",
    text: "This product is great! It really helped me in my daily tasks.",
  },
  {
    id: 2,
    author: "Jane Smith",
    text: "Amazing service, very prompt and always friendly.",
  },
  {
    id: 3,
    author: "Alice Johnson",
    text: "I had a few issues initially but their customer service was outstanding and everything was resolved quickly.",
  },
];

const ReviewSlideshow = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Function to go to the next review
  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  // Function to go to the previous review
  const prevReview = () => {
    setCurrentReviewIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextReview, 5000); // Change review every 5 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="review-slideshow">
      <div className="review">
        <p>{reviews[currentReviewIndex].text}</p>
        <h4>- {reviews[currentReviewIndex].author}</h4>
      </div>
      <div className="navigation">
        <button onClick={prevReview}>Previous</button>
        <button onClick={nextReview}>Next</button>
      </div>
    </div>
  );
};

export default ReviewSlideshow;
