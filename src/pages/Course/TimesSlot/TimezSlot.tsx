import React from "react";

import ScheduleDropdown from "../ScheduleDropdown/ScheduleDropdown";

import TimeSlot from "./TimeSlot/TimeSlot";

import { TIME_SLOTS } from "../../../consts/consts";

const TimesSlot: React.FC = () => {
  return (
    <ScheduleDropdown heading="Time Slot" num={2}>
      {TIME_SLOTS.map((slot, i) => (
        <React.Fragment key={i}>
          <TimeSlot dayPeriod={slot.period} timePeriod={slot.time} />
        </React.Fragment>
      ))}
    </ScheduleDropdown>
  );
};

export default TimesSlot;
