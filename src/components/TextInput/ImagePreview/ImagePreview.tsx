import React from "react";

import type { ImagePreviewProps } from "./ImagePreview.types";

import "./ImagePreview.scss";

const ImagePreview: React.FC<ImagePreviewProps> = ({
  preview,
  imageDetails,
  updateUserStep,
  userName,
  completeProfile,
}) => {
  return (
    <div className="image-preview-box">
      <div className="avatar-img-box">
        <img
          className="avatar-img"
          src={preview ? preview : "images/user-avatar.png"}
          alt="avatar"
        />
        <svg
          className="status-indicator"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="7.5"
            cy="7.5"
            r="6.5"
            fill={completeProfile ? "#1dc31d" : "#f4a316"}
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
      {userName && (
        <div>
          <h4>{userName}</h4>
          {completeProfile && (
            <span
              className={`profile-indicator ${completeProfile ? "complete" : "incomplete"}`}
            >
              Complete Profile
            </span>
          )}
        </div>
      )}
      {!updateUserStep && (
        <div className="image-details">
          <span className="image-name">{imageDetails?.name}</span>
          <span className="image-size">`${imageDetails?.size}MB`</span>
          <button>Change</button>
        </div>
      )}
    </div>
  );
};

export default ImagePreview;
