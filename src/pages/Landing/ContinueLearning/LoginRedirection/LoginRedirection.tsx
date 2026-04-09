import React, { useContext } from "react";

import { AppContext, type ContextType } from "../../../../context/appContext";

import "./LoginRedirection.scss";

const LoginRedirection: React.FC = () => {
  const { setShowLogin } = useContext(AppContext) as ContextType;

  const handleLoginOpen = () => {
    setShowLogin(true);
  };

  return (
    <div className="login-redirection">
      <img src="images/locked.png" alt="locked in " />
      <p>Sign in to track your learning progress</p>
      <button onClick={handleLoginOpen} className="btn-logIn">
        Log In
      </button>
    </div>
  );
};

export default LoginRedirection;
