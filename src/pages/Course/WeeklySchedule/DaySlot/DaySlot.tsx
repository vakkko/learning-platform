import React from "react";

import type { DaySlotProps } from "./DaySlot.types";

import "./DaySlot.scss";

const DaySlot: React.FC<DaySlotProps> = ({ days }) => {
  return <button className={`day-slot `}>{days}</button>;
};

export default DaySlot;
