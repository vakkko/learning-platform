import React from "react";

import NavigationColumn from "./NavigationColumn/NavigationColumn";

import { EXPLORE, ACCOUNT, CONTACT } from "../../../consts/consts";

import "./Navigation.scss";

const Navigation: React.FC = () => {
  return (
    <div className="footer-navigation-container">
      <div>
        <NavigationColumn links={EXPLORE} heading="Explore" />
        <NavigationColumn links={ACCOUNT} heading="Account" />
        <NavigationColumn links={CONTACT} heading="Contact" />
      </div>
      <small>All Rights Reserved | Terms and Conditions | Privacy Policy</small>
    </div>
  );
};

export default Navigation;
