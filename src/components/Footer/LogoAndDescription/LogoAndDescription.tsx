import React from "react";

import SocialNetworks from "./SocialNetworks/SocialNetworks";

const LogoAndDescription: React.FC = () => {
  return (
    <div>
      <div>
        <img src="images/logo.png" alt="logo" />
        <h3>Bootcamp</h3>
      </div>
      <p>Your learning journey starts here! Browse courses to get started.</p>
      <SocialNetworks />
    </div>
  );
};

export default LogoAndDescription;
