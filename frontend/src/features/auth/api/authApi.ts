import type { LoginValues, SignupValues, User } from "../AuthContext";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log(BASE_URL,'base url auth')

export const getCurrentUser = async (): Promise<User | null> => {
  const response = await fetch(`${BASE_URL}/auth/me`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
};

export const signup = async (values: SignupValues): Promise<boolean> => {
  try {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        email: values.email,
        password: values.password,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error("Signup error:", error);
    return false;
  }
};

export const login = async (values: LoginValues): Promise<boolean> => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        password: values.password,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error("Login error:", error);
    return false;
  }
};

export const logout = async (): Promise<void> => {
  try {
    const response = await fetch(`${BASE_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    console.log("Logout status:", response.status);
  } catch (error) {
    console.error("Logout error:", error);
  }
};
