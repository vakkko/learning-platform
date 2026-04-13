import React from "react";

import useGetData from "../../../../hooks/useGetData/useGetData";

import type { InstructorsTypes } from "./Instructors.types";

import "./Instructors.scss";

const Instructors: React.FC = () => {
  const { data: instructors } = useGetData<InstructorsTypes[]>({
    endpoint: "instructors",
  });

  return (
    <div className="instructors-container">
      {instructors &&
        instructors.map((instructor) => (
          <div key={instructor.id}>
            <img src={instructor.avatar} alt={instructor.name} />
            <span>{instructor.name}</span>
          </div>
        ))}
    </div>
  );
};

export default Instructors;
