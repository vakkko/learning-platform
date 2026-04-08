import React from "react";

import "./AuthRequiredPlaceholder.scss";

const AuthRequiredPlaceholder: React.FC = () => {
  return (
    <div className="auth-required-container">
      <div className="text-content">
        <div>
          <img src="images/course/warning.png" alt="warning icon" />
          <span>Authentication Required</span>
        </div>
        <p>You need sign in to your profile before enrolling in this course.</p>
      </div>
      <button>
        Sign in
        <img src="images/course/right-arrow.png" alt="right arrow" />{" "}
      </button>
    </div>
  );
};

export default AuthRequiredPlaceholder;
