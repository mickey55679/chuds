import React, { useState } from "react";

const reviews = [
  {
    id: 1,
    author: "Kristina Sikkink",
    text: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkristina.sikkink%2Fposts%2Fpfbid0bF8u2Tc4YX2kSjbCE2ihup8EFGz2qBxYVoL88swLZ8yYE6N73KhGyk83pUTGWizWl&show_text=true&width=500&preview=comet_preview" width="500" height="169" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
  },
  {
    id: 2,
    author: "Shannon Wood Klarenbeek",
    text: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsklarenbeek%2Fposts%2Fpfbid0yPzaHcRSyQWNWAAPvxNyC1o9JPCmxVhjfUAJCSg62gbGQEL8NQUyztRKdJ513eWHl&show_text=true&width=500&preview=comet_preview" width="500" height="169" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
  },
  {
    id: 3,
    author: "Alice Johnson",
    text: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjon.burkholder.75%2Fposts%2Fpfbid0PfAedSinHTEN3WXL621HqPP7qVLGcFK5QTkNRt26sxYQrhEVAyaFF5RVJefjcVogl&show_text=true&width=500&preview=comet_preview" width="500" height="186" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
  },
  {
    id: 4,
    author: "Karla Ykema",
    text: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkarla.ykema%2Fposts%2Fpfbid02oa8jLsKHJv3gMYzBxjA64g6MDqDuKntisUMtsmgmc696YfJaMZSePRv3rhjLghmEl&show_text=true&width=500&preview=comet_preview" width="500" height="250" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
  },
];

const ReviewSlideshow = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  

  return (
    <div className="review-slideshow">
      <div
        className="review"
        dangerouslySetInnerHTML={{ __html: reviews[currentReviewIndex].text }}
      />
      {/* <h4>- {reviews[currentReviewIndex].author}</h4> */}
      <div className="navigation">
        <button onClick={prevReview}>Previous</button>
        <button onClick={nextReview}>Next</button>
      </div>
    </div>
  );
};

export default ReviewSlideshow;
