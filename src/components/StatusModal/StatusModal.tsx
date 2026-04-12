import React, { useState } from "react";

import type { StatusModalProps } from "./StatusModal.types";

import "./StatusModal.scss";
import RatingBox from "./RatingBox/RatingBox";
import axios from "axios";
import { BASE_URL } from "../../consts/consts";
import { useParams } from "react-router";

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
  const token = sessionStorage.getItem("token");
  const [rating, setRating] = useState<number | null>(null);

  const handleRateClick = async () => {
    if (rating) {
      try {
        const response = await axios.post(
          `${BASE_URL}/courses/${id}/reviews`,
          {
            rating: rating,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        if (response.status === 201 && handleCancelClick) {
          handleCancelClick();
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

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
