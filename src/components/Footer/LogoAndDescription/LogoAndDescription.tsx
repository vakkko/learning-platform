import React from "react";

import SocialNetworks from "./SocialNetworks/SocialNetworks";

import "./LogoAndDescription.scss";

const LogoAndDescription: React.FC = () => {
  return (
    <div className="logo-and-description-container">
      <div>
        <div className="logo-and-company">
          <img src="/images/logo.png" alt="logo" />
          <h3>Bootcamp</h3>
        </div>
        <p>
          Your learning journey starts here!
          <br /> Browse courses to get started.
        </p>
        <SocialNetworks />
      </div>
      <small>Copyright © 2026 Redberry International</small>
    </div>
  );
};

export default LogoAndDescription;
