import React from "react";

import Button from "../../Button/Button";
import type { AuthButtonsProps } from "./AuthButtons.types";

const AuthButtons: React.FC<AuthButtonsProps> = ({
  handleLoginOpen,
  handleSignUpOpen,
}) => {
  return (
    <div className="buttons-box">
      <Button handleClick={handleLoginOpen} text="Log In" />
      <Button handleClick={handleSignUpOpen} text="Sign Up" purpleBackground />
    </div>
  );
};

export default AuthButtons;
