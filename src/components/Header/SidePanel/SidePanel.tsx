import React from "react";

import "./SidePanel.scss";
import EmptySidePanel from "./EmptySidePanel/EmptySidePanel";

const SidePanel: React.FC = () => {
  const enrolledData = undefined;
  return (
    <>
      <div id="overlay"></div>
      <div className="side-panel-container">
        <div className="side-panel-heading">
          <h2>Enrolled Courses</h2>
          <span>Total Enrollments 0</span>
        </div>
        <div className="side-panel-content">
          {!enrolledData && <EmptySidePanel />}
        </div>
      </div>
    </>
  );
};

export default SidePanel;
