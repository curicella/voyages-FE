import React, { useState } from "react";
import "C:/Users/ICSISTEM/Desktop/VoyagesFE/voyagesFE/src/styles/post.css"

const StarRating = ({ rating, onRatingChange }) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, idx) => {
        idx += 1;
        return (
          <button
            type="button"
            key={idx}
            className={idx <= (rating || hover) ? "on" : "off"}
            onClick={() => {
              onRatingChange(idx)
            }}
            onMouseEnter={() => setHover(idx)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;