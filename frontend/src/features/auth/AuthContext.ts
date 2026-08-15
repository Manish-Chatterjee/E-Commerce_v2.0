import { createContext } from "react";

export type User = {
  // name?: string;
  // email: string;
  // password: string;

  id: number;
  name?: string;
  username: string;
  email: string;
  role: "ADMIN" | "USER" | "GUEST";
};

export type LoginValues = {
  username: string;
  password: string;
};

export type SignupValues = {
  username: string;
  name?: string;
  email: string;
  password: string;
};

export type AuthContextType = {
  user: User | null;
  // token: string | null;

  // login: (values: User) => boolean;
  // signup: (values: User) => boolean;

  login: (values: LoginValues) => Promise<boolean>;
  signup: (values: SignupValues) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextType | null>(null);
