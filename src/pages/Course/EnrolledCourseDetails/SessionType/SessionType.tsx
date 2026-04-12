import React from "react";
import type { SessionTypeProps } from "./SessionType.types";

const SessionType: React.FC<SessionTypeProps> = ({ id, name, location }) => {
  return (
    <section>
      {location ? (
        id === 1 ? (
          ""
        ) : (
          <img src="images/contacts/location.png" />
        )
      ) : (
        <img src={`images/session/${id}.png`} alt="session Type" />
      )}
      <span>{name}</span>
    </section>
  );
};

export default SessionType;
