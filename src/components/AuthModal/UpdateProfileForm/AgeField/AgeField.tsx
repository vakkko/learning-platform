import React from "react";

import "./AgeField.scss";
import type { AgeFieldProps } from "./AgeField.types";
import ErrorMessage from "../../../ErrorMessage/ErrorMessage";

const AgeField: React.FC<AgeFieldProps> = ({
  register,
  errors,
  getFieldState,
}) => {
  const numbers = Array.from({ length: 130 }, (_, i) => i + 1);
  const { invalid, isDirty } = getFieldState("age");

  const inputValue = isDirty && !invalid;
  const validInput = !errors && inputValue;

  return (
    <>
      <div className="age-field  ">
        <label htmlFor="age">Age</label>
        <select
          className={`${errors ? "invalid" : validInput ? "valid" : ""}`}
          {...register("age")}
          name="age"
        >
          {numbers.map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <img
          className="down-arrow"
          src="images/input/down-arrow.png"
          alt="down arrow"
        />
        {errors && <ErrorMessage error={[errors]} />}
      </div>
    </>
  );
};

export default AgeField;
