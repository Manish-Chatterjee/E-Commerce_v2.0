import { useState } from "react";
import { AuthContext, type User } from "./AuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // const [user, setUser] = useState<User | null>(null);
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("currentUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

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
      (u: User) => u.email === values.email && u.password === values.password,
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
