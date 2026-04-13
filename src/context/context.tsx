import { useState } from "react";

import { AppContext } from "./appContext.ts";

interface AppType {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppType> = ({ children }) => {
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [authorized, setAuthorized] = useState<boolean>(() => {
    return Boolean(sessionStorage.getItem("token"));
  });
  const [showSignUp, setShowSignUp] = useState<boolean>(false);
  const [showUserModal, setShowUserModal] = useState<boolean>(false);
  const [showSidePanel, setShowSidePanel] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        showLogin,
        setShowLogin,
        authorized,
        setAuthorized,
        showSignUp,
        setShowSignUp,
        showUserModal,
        setShowUserModal,
        showSidePanel,
        setShowSidePanel,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
