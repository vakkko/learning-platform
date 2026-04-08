import React from "react";

import type { TimeSlotProps } from "./TimeSlot.types";

import "./TimeSlot.scss";

const TimeSlot: React.FC<TimeSlotProps> = ({ dayPeriod, timePeriod }) => {
  const dayPeriodLowered = dayPeriod.toLowerCase();

  return (
    <div className="time-slot-container">
      <img
        src={`images/course/${dayPeriodLowered}.png`}
        alt={dayPeriodLowered}
      />
      <div className="time-and-text">
        <span className="day-period">{dayPeriod}</span>
        <p className="time-period">{timePeriod}</p>
      </div>
    </div>
  );
};

export default TimeSlot;
