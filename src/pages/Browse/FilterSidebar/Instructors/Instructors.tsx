import React from "react";

import useGetData from "../../../../hooks/useGetData/useGetData";

import type { InstructorProps, InstructorsTypes } from "./Instructors.types";

import "./Instructors.scss";

const Instructors: React.FC<InstructorProps> = ({
  handleChange,
  setInstructorValue,
  instuctorId,
}) => {
  const { data: instructors } = useGetData<InstructorsTypes[]>({
    endpoint: "instructors",
  });

  return (
    <div
      onClick={(e) => handleChange(e, setInstructorValue)}
      className="instructors-container"
    >
      {instructors &&
        instructors.map((instructor) => (
          <button
            data-id={instructor.id}
            data-category={instructor.name}
            key={instructor.id}
            className={instuctorId === instructor.id ? "active" : ""}
          >
            <img src={instructor.avatar} alt={instructor.name} />
            <span>{instructor.name}</span>
          </button>
        ))}
    </div>
  );
};

export default Instructors;
