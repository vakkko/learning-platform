import React from "react";

import type { StatusModalProps } from "./StatusModal.types";

import "./StatusModal.scss";

const StatusModal: React.FC<StatusModalProps> = ({
  image,
  title,
  description,
  btn1,
  btn2,
  handleBtn1Click,
  handleBtn2Click,
}) => {
  return (
    <>
      <div id="overlay"></div>
      <div className="status-modal-container">
        <div className="image-and-description">
          <img src={`images/enroll/${image}.png`} alt={image} />
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="buttons-box">
          <button onClick={handleBtn1Click} className="btn1">
            {btn1}
          </button>
          {btn2 && (
            <button onClick={handleBtn2Click} className="btn2">
              Cancel
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default StatusModal;
