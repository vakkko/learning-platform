import React, { useState } from "react";

import type { StatusModalProps } from "./StatusModal.types";

import "./StatusModal.scss";
import RatingBox from "./RatingBox/RatingBox";
import { useParams } from "react-router";
import useRateCourse from "../../hooks/useRateCourse/useRateCourse";

const StatusModal: React.FC<StatusModalProps> = ({
  image,
  title,
  description,
  btnConfirm,
  btnCancel,
  handleConfirmClick,
  handleCancelClick,
  showSuccess,
}) => {
  const { id } = useParams();
  const [rating, setRating] = useState<number | null>(null);

  const handleRateClick = useRateCourse(id, rating, handleCancelClick);

  return (
    <>
      <div onClick={handleCancelClick} id="overlay"></div>
      <div className="status-modal-container">
        <div className="image-and-description">
          <img src={`images/enroll/${image}.png`} alt={image} />
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        {showSuccess && <RatingBox rating={rating} setRating={setRating} />}
        <div className="buttons-box">
          {btnConfirm && (
            <button onClick={handleConfirmClick} className="btn1">
              {btnConfirm}
            </button>
          )}
          {btnCancel && (
            <button
              onClick={handleCancelClick ? handleCancelClick : handleRateClick}
              className="btn2"
            >
              {btnCancel}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default StatusModal;
