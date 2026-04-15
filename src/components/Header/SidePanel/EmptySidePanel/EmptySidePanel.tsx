import React from "react";

import { Link } from "react-router";

import "./EmptySidePanel.scss";

const EmptySidePanel: React.FC = () => {
  return (
    <div className="empty-content">
      <img src="/images/empty-box.png" alt="empty box" />
      <h3>No Enrolled Courses Yet</h3>
      <p>Your learning journey starts here! Browse courses to get started.</p>
      <Link to={"browse"}>Browse Courses</Link>
    </div>
  );
};

export default EmptySidePanel;
