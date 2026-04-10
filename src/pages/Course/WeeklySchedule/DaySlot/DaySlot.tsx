import React from "react";

import type { DaySlotProps } from "./DaySlot.types";

import "./DaySlot.scss";

const DaySlot: React.FC<DaySlotProps> = ({ weekObj }) => {
  return <button className="day-slot">{weekObj.label}</button>;
};

export default DaySlot;
