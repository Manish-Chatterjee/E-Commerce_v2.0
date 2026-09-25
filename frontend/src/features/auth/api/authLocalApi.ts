import type { LoginValues, SignupValues, User } from "../AuthContext";

const USERS_KEY = "local_users";
const CURRENT_USER_KEY = "local_current_user";

type LocalUser = User & { password: string };

export const getCurrentUser = async (): Promise<User | null> => {
  const currentUser = localStorage.getItem(CURRENT_USER_KEY);
  if (!currentUser) {
    return null;
  }
  return JSON.parse(currentUser);
};

export const signup = async (values: SignupValues): Promise<boolean> => {
  const users: (User & { password: string })[] = JSON.parse(
    localStorage.getItem(USERS_KEY) || "[]",
  );
  const userExists = users.some(
    (user) => user.username === values.username || user.email === values.email,
  );
  if (userExists) {
    return false;
  }
  const newUser: LocalUser = {
    id: Date.now(),
    username: values.username,
    email: values.email,
    password: values.password,
    role: "USER",
  };
  users.push(newUser);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return true;
};

export const login = async (values: LoginValues): Promise<boolean> => {
  const users: (User & { password: string })[] = JSON.parse(
    localStorage.getItem(USERS_KEY) || "[]",
  );
  const user = users.find(
    (user) =>
      user.username === values.username && user.password === values.password,
  );
  if (!user) {
    return false;
  }
  const { password, ...userWithoutPassword } = user;
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));
  return true;
};

export const logout = async (): Promise<void> => {
  localStorage.removeItem(CURRENT_USER_KEY);
};
