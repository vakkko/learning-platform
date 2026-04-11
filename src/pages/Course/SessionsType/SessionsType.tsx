import React from "react";

import { useParams } from "react-router";

import SessionType from "./SessionType/SessionType";
import ScheduleDropdown from "../ScheduleDropdown/ScheduleDropdown";

import type { SessionsTypeProps, SessionTypes } from "./SessionsType.types";
import useGetData from "../../../hooks/useGetData/useGetData";

const SessionsType: React.FC<SessionsTypeProps> = ({
  daysId,
  timeId,
  handleSessionClick,
  sessionId,
}) => {
  const { id } = useParams();

  const { data: sessionData } = useGetData<SessionTypes[]>({
    endpoint: `courses/${id}/session-types?weekly_schedule_id=${daysId}&time_slot_id=${timeId}`,
  });

  return (
    <ScheduleDropdown heading="Session Type" num={3}>
      {sessionData &&
        sessionData.map((slot) => (
          <React.Fragment key={slot.id}>
            <SessionType
              price={slot.priceModifier}
              sessionPlace={slot.location}
              sessionType={slot.name.replace("_", "-")}
              availableSeats={slot.availableSeats}
              handleSessionClick={handleSessionClick}
              sessionId={sessionId}
              id={slot.id}
            />
          </React.Fragment>
        ))}
    </ScheduleDropdown>
  );
};

export default SessionsType;
