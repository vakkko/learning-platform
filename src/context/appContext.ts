import { createContext } from "react";

export interface ContextType {
  showLogin: boolean;
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
  authorized: boolean;
  setAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
  showSignUp: boolean;
  setShowSignUp: React.Dispatch<React.SetStateAction<boolean>>;
  showUserModal: boolean;
  setShowUserModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<ContextType | null>(null);
