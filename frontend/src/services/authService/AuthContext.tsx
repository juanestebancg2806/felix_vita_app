import { createContext, useState, ReactNode, useContext } from "react";
import axiosInstance from "../axiosConfig";
import displayToastMessage from "../toastService";

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  login: (username: string, password: string) => Promise<boolean | undefined>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const login = async (
    username: string,
    password: string
  ): Promise<boolean | undefined> => {
    try {
      if (username !== "admin" || password !== "admin") {
        displayToastMessage("Invalid credentials", "error");
        return false;
      }
      const response = await axiosInstance.get("/auth", {
        auth: {
          username,
          password,
        },
      });

      if (response.status === 200) {
        setToken("Basic " + btoa(`${username}:${password}`));
        setIsAuthenticated(true);
        axiosInstance.defaults.auth = { username, password }; // Set default auth for future requests
        return true;
      }
      return false;
    } catch (error) {
      console.error("Login failed", error);
      setIsAuthenticated(false);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    delete axiosInstance.defaults.auth; // Remove default auth
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("Error initializing provider");
  }
  return context;
};
