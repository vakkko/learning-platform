import React from "react";

import { useParams } from "react-router";

import ScheduleDropdown from "../ScheduleDropdown/ScheduleDropdown";
import DaySlot from "./DaySlot/DaySlot";

import useGetData from "../../../hooks/useGetData/useGetData";

import type {
  WeeklyScheduleProps,
  WeekObjectTypes,
} from "./WeeklySchedule.types";

const WeeklySchedule: React.FC<WeeklyScheduleProps> = ({
  handleDaysClick,
  daysId,
}) => {
  const { id } = useParams();
  const { data: weeks } = useGetData<WeekObjectTypes[]>({
    endpoint: `courses/${id}/weekly-schedules`,
  });

  return (
    <div className="weekdays-container">
      <ScheduleDropdown heading="Weekly Schedule" num={1}>
        {weeks &&
          weeks.map((week) => (
            <React.Fragment key={week.id}>
              <DaySlot
                weekObj={week}
                daysId={daysId}
                handleDaysClick={handleDaysClick}
              />
            </React.Fragment>
          ))}
      </ScheduleDropdown>
    </div>
  );
};

export default WeeklySchedule;
