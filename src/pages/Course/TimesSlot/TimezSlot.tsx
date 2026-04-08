import React from "react";
import ScheduleDropdown from "../ScheduleDropdown/ScheduleDropdown";
import TimeSlot from "./TimeSlot/TimeSlot";

const TimesSlot: React.FC = () => {
  return (
    <ScheduleDropdown heading="Time Slot" num={2}>
      <TimeSlot />
    </ScheduleDropdown>
  );
};

export default TimesSlot;
