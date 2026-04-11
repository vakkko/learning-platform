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

  return (
    <AppContext.Provider
      value={{ showLogin, setShowLogin, authorized, setAuthorized }}
    >
      {children}
    </AppContext.Provider>
  );
};
