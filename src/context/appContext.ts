import { createContext } from "react";

export interface ContextType {
  showLogin: boolean;
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<ContextType | null>(null);
