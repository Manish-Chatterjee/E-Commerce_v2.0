import { createContext, useContext, useEffect, useState } from "react";

type User = {
  name?: string;
  email: string;
  password: string;
};

type AuthContextType = {
  user: User | null;
  login: (values: User) => boolean;
  signup: (values: User) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // 🔄 Persist login on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // 🔐 SIGNUP
  const signup = (values: User) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const userExists = users.find((u: User) => u.email === values.email);

    if (userExists) {
      return false;
    }

    users.push(values);
    localStorage.setItem("users", JSON.stringify(users));
    return true;
  };

  // 🔐 LOGIN
  const login = (values: User) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const validUser = users.find(
      (u: User) =>
        u.email === values.email && u.password === values.password
    );

    if (!validUser) return false;

    localStorage.setItem("currentUser", JSON.stringify(validUser));
    setUser(validUser);
    return true;
  };

  // 🚪 LOGOUT
  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// 🔥 Custom Hook (clean usage)
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};