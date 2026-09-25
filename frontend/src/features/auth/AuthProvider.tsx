import { useEffect, useState } from "react";
import {
  AuthContext,
  type LoginValues,
  type SignupValues,
  type User,
} from "./AuthContext";
import { getAuthService } from "./services/authService";
import { useDataMode } from "@/shared/context/DataMode_Context/useDataMode";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { mode } = useDataMode();
  const authService = getAuthService(mode);

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  // const [user, setUser] = useState<User | null>(() => {
  //   const storedUser = localStorage.getItem("currentUser");
  //   return storedUser ? JSON.parse(storedUser) : null;
  // });

  // // 🪪 TOKEN
  // const [token, setToken] = useState<string | null>(() => {
  //   return localStorage.getItem("token");
  // });

  // 🔄 CHECK CURRENT USER
  // Runs when the application starts / page is refreshed
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const data = await authService.getCurrentUser();

        setUser(data);
      } catch (error) {
        console.error("Fetch current user error:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, [authService]);

  // // 🔐 SIGNUP
  // const signup = (values: User) => {
  //   const users = JSON.parse(localStorage.getItem("users") || "[]");

  //   const userExists = users.find((u: User) => u.email === values.email);

  //   if (userExists) {
  //     return false;
  //   }

  //   users.push(values);
  //   localStorage.setItem("users", JSON.stringify(users));
  //   return true;
  // };

  // 🔐 SIGNUP
  const signup = async (values: SignupValues) => {
    return authService.signup(values);
  };

  // // 🔐 LOGIN
  // const login = (values: User) => {
  //   const users = JSON.parse(localStorage.getItem("users") || "[]");

  //   const validUser = users.find(
  //     (u: User) => u.email === values.email && u.password === values.password,
  //   );

  //   if (!validUser) return false;

  //   localStorage.setItem("currentUser", JSON.stringify(validUser));
  //   setUser(validUser);
  //   return true;
  // };

  // 🔐 LOGIN
  const login = async (values: LoginValues): Promise<boolean> => {
    const success = await authService.login(values);

    if (!success) {
      return false;
    }

    const user = await authService.getCurrentUser();

    if (!user) {
      return false;
    }

    setUser(user);

    return true;
    // try {
    //   const response = await fetch(`${BASE_URL}/auth/login`, {
    //     method: "POST",
    //     credentials: "include",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },

    //     // 🔥 Important for HttpOnly cookie
    //     // credentials: "include",

    //     body: JSON.stringify({
    //       username: values.username,
    //       password: values.password,
    //     }),
    //   });

    //   if (!response.ok) {
    //     return false;
    //   }

    //   // 🔥 Get logged-in user
    //   const meResponse = await fetch(`${BASE_URL}/auth/me`, {
    //     method: "GET",
    //     credentials: "include",
    //   });

    //   if (!meResponse.ok) {
    //     return false;
    //   }

    //   const loggedInUser: User = await meResponse.json();

    //   setUser(loggedInUser);

    //   return true;
    // } catch (error) {
    //   console.error("Login error:", error);

    //   return false;
    // }

    // const data = await response.json();

    /*
        Expected backend response:

        {
          token: "...",
          id: 1,
          username: "manish",
          email: "manish@gmail.com",
          role: "USER"
        }
      */

    //   const loggedInUser: User = {
    //     id: data.id,
    //     username: data.username,
    //     email: data.email,
    //     role: data.role,
    //   };

    //   setUser(loggedInUser);
    //   setToken(data.token);

    //   localStorage.setItem("currentUser", JSON.stringify(loggedInUser));

    //   localStorage.setItem("token", data.token);

    //   return true;
    // } catch (error) {
    //   console.error("Login error:", error);

    //   return false;
    // }
  };

  // // 🚪 LOGOUT
  // const logout = () => {
  //   localStorage.removeItem("currentUser");
  //   setUser(null);
  // };

  // 🚪 LOGOUT
  const logout = async (): Promise<void> => {
    // try {
    //   const response = await fetch(`${BASE_URL}/auth/logout`, {
    //     method: "POST",
    //     credentials: "include",
    //   });
    //   console.log("Logout status:", response.status);
    // } catch (error) {
    //   console.error("Logout error:", error);
    // } finally {
    //   // Remove user from React state
    //   setUser(null);
    // }
    try {
      await authService.logout();
    } finally {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isAuthenticated: !!user, // If user contains data, !!user evaluates to true. If user is empty, it evaluates to false.
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
