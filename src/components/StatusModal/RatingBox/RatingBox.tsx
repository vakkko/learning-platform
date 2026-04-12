import React from "react";
import "./RatingBox.scss";
import type { RatingBoxProps } from "./RatingBox.types";

const RatingBox: React.FC<RatingBoxProps> = ({ rating, setRating }) => {
  const [hovered, setHovered] = React.useState<number | null>(null);

  const handleStarClick = (index: number) => {
    if (setRating) setRating(index);
  };

  return (
    <div className="rating-box">
      <p>Rate your experience</p>

      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => {
          const isFilled =
            hovered !== null ? star <= hovered : star <= (rating ?? 0);

          return (
            <button
              key={star}
              onMouseEnter={() => setHovered(star)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleStarClick(star)}
              className={isFilled ? "filled" : ""}
            >
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.0947 1.92862C22.4546 1.16182 23.5453 1.16181 23.9052 1.92862L29.8806 14.6592C30.0223 14.9611 30.3052 15.1725 30.6348 15.2229L44.0762 17.2765C44.8808 17.3994 45.2093 18.3808 44.6409 18.9634L34.8524 28.9958C34.6308 29.223 34.5301 29.5419 34.5812 29.8552L36.8832 43.9676C37.0176 44.7914 36.143 45.4076 35.4125 45.0037L23.4838 38.4097C23.1827 38.2433 22.8172 38.2433 22.5162 38.4097L10.5875 45.0037C9.85689 45.4076 8.98232 44.7914 9.11671 43.9676L11.4187 29.8552C11.4698 29.5419 11.3692 29.223 11.1475 28.9958L1.35904 18.9634C0.79063 18.3808 1.11917 17.3994 1.92376 17.2765L15.3651 15.2229C15.6947 15.1725 15.9776 14.9611 16.1193 14.6592L22.0947 1.92862Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RatingBox;
