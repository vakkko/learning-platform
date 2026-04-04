import React from "react";

import type { ImagePreviewProps } from "./ImagePreview.types";

import "./ImagePreview.scss";

const ImagePreview: React.FC<ImagePreviewProps> = ({
  preview,
  imageDetails,
}) => {
  return (
    <div className="image-preview-box">
      <img src={preview} alt="avatar" />
      <div className="image-details">
        <span className="image-name">{imageDetails?.name}</span>
        <span className="image-size">{imageDetails?.size}MB</span>
        <button>Change</button>
      </div>
    </div>
  );
};

export default ImagePreview;
