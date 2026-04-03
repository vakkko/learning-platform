import type { Dispatch, SetStateAction } from "react";

export function updateStepStatus(
  isValid: boolean,
  updateState: Dispatch<SetStateAction<number>>,
  nextValue: number,
  currentValue: number,
) {
  if (isValid) {
    updateState(nextValue);
  } else {
    updateState(currentValue);
  }
}
