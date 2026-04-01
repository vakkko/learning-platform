import React from "react";
import Button from "../Button/Button";

const Header: React.FC = () => {
  return (
    <header>
      <img src="/images/logo.png" alt="logo" />

      <div>
        <div>
          <img src="/images/three-stars.png" alt="three stars" />
          <span>Browse Courses</span>
        </div>
        <Button text="Log In" />
      </div>
    </header>
  );
};

export default Header;
