import React, { useContext } from "react";

import NavigationColumn from "./NavigationColumn/NavigationColumn";

import { EXPLORE, ACCOUNT, CONTACT } from "../../../consts/consts";

import "./Navigation.scss";
import { AppContext, type ContextType } from "../../../context/appContext";

const Navigation: React.FC = () => {
  const { setShowSidePanel, setShowUserModal } = useContext(
    AppContext,
  ) as ContextType;

  const handleEnrolledCourseClick = () => {
    setShowSidePanel(true);
  };

  const handleMyProfileClick = () => {
    setShowUserModal(true);
  };

  return (
    <div className="footer-navigation-container">
      <div>
        <NavigationColumn
          links={EXPLORE}
          handleOpen={handleEnrolledCourseClick}
          heading="Explore"
        />
        <NavigationColumn
          handleOpen={handleMyProfileClick}
          links={ACCOUNT}
          heading="Account"
        />
        <NavigationColumn links={CONTACT} heading="Contact" />
      </div>
      <small>All Rights Reserved | Terms and Conditions | Privacy Policy</small>
    </div>
  );
};

export default Navigation;
