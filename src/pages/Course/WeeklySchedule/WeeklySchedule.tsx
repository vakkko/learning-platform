import React from "react";

import ScheduleDropdown from "../ScheduleDropdown/ScheduleDropdown";

import DaySlot from "./DaySlot/DaySlot";

import { DAYS_SLOTS } from "../../../consts/consts";

const WeeklySchedule: React.FC = () => {
  return (
    <div className="weekdays-container">
      <ScheduleDropdown>
        {DAYS_SLOTS.map((days, i) => (
          <React.Fragment key={i}>
            <DaySlot days={days} />
          </React.Fragment>
        ))}
      </ScheduleDropdown>
    </div>
  );
};

export default WeeklySchedule;
