import React from "react";

import type { ImagePreviewProps } from "./ImagePreview.types";

import "./ImagePreview.scss";

const ImagePreview: React.FC<ImagePreviewProps> = ({
  preview,
  imageDetails,
  updateUserStep,
  userName,
}) => {
  return (
    <div className="image-preview-box">
      <img src={preview ? preview : "images/user-avatar.png"} alt="avatar" />
      {userName && (
        <div>
          <h4>{userName}</h4>
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
