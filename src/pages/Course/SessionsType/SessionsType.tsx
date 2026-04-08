import React from "react";

import SessionType from "./SessionType/SessionType";

import { SESSION_TYPES } from "../../../consts/consts";
import ScheduleDropdown from "../ScheduleDropdown/ScheduleDropdown";

const SessionsType: React.FC = () => {
  return (
    <ScheduleDropdown heading="Session Type" num={3}>
      {SESSION_TYPES.map((slot, i) => (
        <React.Fragment key={i}>
          <SessionType
            price={slot.price}
            sessionPlace={slot.place}
            sessionType={slot.sessionType}
          />
        </React.Fragment>
      ))}
    </ScheduleDropdown>
  );
};

export default SessionsType;
