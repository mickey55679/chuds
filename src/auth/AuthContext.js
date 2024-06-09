
import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: null, user: null });

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:3000/login-admin", {
        email,
        password,
      });
      setAuth({ token: response.data.token, user: response.data.user });
    } catch (error) {
      console.error("Login Failed:", error);
      throw error;
    }
  };

  const logout = () => {
    setAuth({ token: null, user: null });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
