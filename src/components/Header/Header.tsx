import React from "react";

import Button from "../Button/Button";

import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header>
      <img src="/images/logo.png" alt="logo" />
      <div>
        <div className="browse-courses-box">
          <img src="/images/three-stars.png" alt="three stars" />
          <span>Browse Courses</span>
        </div>
        <div className="buttons-box">
          <Button text="Log In" />
          <Button text="Sign Up" purpleBackground />
        </div>
      </div>
    </header>
  );
};

export default Header;
