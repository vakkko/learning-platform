import React, { useContext } from "react";

import NavigationColumn from "./NavigationColumn/NavigationColumn";

import { EXPLORE, ACCOUNT, CONTACT } from "../../../consts/consts";

import "./Navigation.scss";
import { AppContext, type ContextType } from "../../../context/appContext";

const Navigation: React.FC = () => {
  const { setShowSidePanel } = useContext(AppContext) as ContextType;

  const handleMyProfileClick = () => {
    setShowSidePanel(true);
  };

  return (
    <div className="footer-navigation-container">
      <div>
        <NavigationColumn
          links={EXPLORE}
          handleOpen={handleMyProfileClick}
          heading="Explore"
        />
        <NavigationColumn links={ACCOUNT} heading="Account" />
        <NavigationColumn links={CONTACT} heading="Contact" />
      </div>
      <small>All Rights Reserved | Terms and Conditions | Privacy Policy</small>
    </div>
  );
};

export default Navigation;
