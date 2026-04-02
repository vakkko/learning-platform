import React from "react";

import LogoAndDescription from "./LogoAndDescription/LogoAndDescription";
import Navigation from "./Navigation/Navigation";

import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer>
      <LogoAndDescription />
      <Navigation />
    </footer>
  );
};

export default Footer;
