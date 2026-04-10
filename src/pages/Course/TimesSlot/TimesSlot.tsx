import React from "react";

import ScheduleDropdown from "../ScheduleDropdown/ScheduleDropdown";
import TimeSlot from "./TimeSlot/TimeSlot";

import useGetData from "../../../hooks/useGetData/useGetData";
import { useParams } from "react-router";

import type { TimeSlotTypes, TimesSlotProps } from "./TimesSlot.types";

const TimesSlot: React.FC<TimesSlotProps> = ({ daysId }) => {
  const { id } = useParams();

  const { data: timeSlots } = useGetData<TimeSlotTypes[]>({
    endpoint: `courses/${id}/time-slots?weekly_schedule_id=${daysId}`,
  });

  return (
    <ScheduleDropdown heading="Time Slot" num={2}>
      {timeSlots &&
        daysId &&
        timeSlots.map((slot) => (
          <React.Fragment key={slot.id}>
            <TimeSlot
              dayPeriod={slot.label.split(" ")[0]}
              timePeriod={`${slot.startTime}-${slot.endTime}`}
            />
          </React.Fragment>
        ))}
    </ScheduleDropdown>
  );
};

export default TimesSlot;
