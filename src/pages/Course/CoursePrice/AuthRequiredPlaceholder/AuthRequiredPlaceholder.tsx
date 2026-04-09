import React, { useContext } from "react";

import { AppContext, type ContextType } from "../../../../context/AppContext";

import "./AuthRequiredPlaceholder.scss";

const AuthRequiredPlaceholder: React.FC = () => {
  const { setShowLogin } = useContext(AppContext) as ContextType;

  const handleSignInClick = () => {
    setShowLogin(true);
  };

  return (
    <div className="auth-required-container">
      <div className="text-content">
        <div>
          <img src="images/course/warning.png" alt="warning icon" />
          <span>Authentication Required</span>
        </div>
        <p>You need sign in to your profile before enrolling in this course.</p>
      </div>
      <button onClick={handleSignInClick}>
        Sign in
        <img src="images/course/right-arrow.png" alt="right arrow" />{" "}
      </button>
    </div>
  );
};

export default AuthRequiredPlaceholder;
