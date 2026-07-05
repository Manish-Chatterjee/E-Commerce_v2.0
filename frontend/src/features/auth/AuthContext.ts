import { createContext } from "react";

export type User = {
  name?: string;
  email: string;
  password: string;
};

export type AuthContextType = {
  user: User | null;
  login: (values: User) => boolean;
  signup: (values: User) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
};

export const AuthContext = createContext<AuthContextType | null>(null);
