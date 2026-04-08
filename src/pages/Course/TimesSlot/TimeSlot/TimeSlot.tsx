import React from "react";

import "./TimeSlot.scss";

const TimeSlot: React.FC = () => {
  return (
    <div className="time-slot-container">
      <img src="images/course/morning.png" alt="morning" />
      <div className="time-and-text">
        <span className="day-period">Morning</span>
        <p className="time-period">9:00 AM - 12:00PM</p>
      </div>
    </div>
  );
};

export default TimeSlot;
