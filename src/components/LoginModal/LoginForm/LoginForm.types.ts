import type { Dispatch, SetStateAction } from "react";

export interface LoginFormProps {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}
