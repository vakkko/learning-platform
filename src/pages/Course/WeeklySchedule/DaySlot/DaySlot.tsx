import React from "react";

import type { DaySlotProps } from "./DaySlot.types";

import "./DaySlot.scss";

const DaySlot: React.FC<DaySlotProps> = ({
  weekObj,
  handleDaysClick,
  daysId,
}) => {
  return (
    <button
      onClick={() => handleDaysClick(weekObj.id, weekObj.label)}
      className={`day-slot ${daysId === weekObj.id ? "active" : ""}`}
    >
      {weekObj.label}
    </button>
  );
};

export default DaySlot;
