import React, { useContext } from "react";

import NavigationColumn from "./NavigationColumn/NavigationColumn";

import { EXPLORE, ACCOUNT, CONTACT } from "../../../consts/consts";

import "./Navigation.scss";
import { AppContext, type ContextType } from "../../../context/appContext";

const Navigation: React.FC = () => {
  const { setShowSidePanel, setShowUserModal, authorized, setShowLogin } =
    useContext(AppContext) as ContextType;

  const handleEnrolledCourseClick = () => {
    if (!authorized) {
      setShowLogin(true);
    } else {
      setShowSidePanel(true);
    }
  };

  const handleMyProfileClick = () => {
    if (!authorized) {
      setShowLogin(true);
    } else {
      setShowUserModal(true);
    }
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
