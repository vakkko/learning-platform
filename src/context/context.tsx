import { useState } from "react";

import { AppContext } from "./AppContext.ts";

interface AppType {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppType> = ({ children }) => {
  const [showLogin, setShowLogin] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ showLogin, setShowLogin }}>
      {children}
    </AppContext.Provider>
  );
};
