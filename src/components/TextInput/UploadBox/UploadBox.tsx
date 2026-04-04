import React from "react";

import "./UploadBox.scss";

const UploadBox: React.FC = () => {
  return (
    <div className="upload-box">
      <img src="images/upload.png" alt="upload icon" />
      <p className="upload-files">
        Drag and drop or <span>Upload file</span>
      </p>
      <p className="file-types">JPG, PNG or WebP</p>
    </div>
  );
};

export default UploadBox;
