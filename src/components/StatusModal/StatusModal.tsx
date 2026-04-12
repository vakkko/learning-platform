import React from "react";

import type { StatusModalProps } from "./StatusModal.types";

import "./StatusModal.scss";
import RatingBox from "./RatingBox/RatingBox";

const StatusModal: React.FC<StatusModalProps> = ({
  image,
  title,
  description,
  btnConfirm,
  btnCancel,
  handleConfirmClick,
  handleCancelClick,
  rating,
  setRating,
}) => {
  return (
    <>
      <div onClick={handleCancelClick} id="overlay"></div>
      <div className="status-modal-container">
        <div className="image-and-description">
          <img src={`images/enroll/${image}.png`} alt={image} />
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <RatingBox rating={rating} setRating={setRating} />
        <div className="buttons-box">
          {btnConfirm && (
            <button onClick={handleConfirmClick} className="btn1">
              {btnConfirm}
            </button>
          )}
          {btnCancel && (
            <button onClick={handleCancelClick} className="btn2">
              Cancel
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default StatusModal;
