import type { Dispatch, SetStateAction } from "react";

export interface SignUpProps {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  handleSignUpClose: () => void;
}
