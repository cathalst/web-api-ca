import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    const response = await fetch("http://localhost:8080/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      setUser(username);
      localStorage.setItem("token", data.token);
      return true;
    } else {
      return false;
    }
  };

  const signup = async ({ username, password }) => {
    const response = await fetch("http://localhost:8080/api/users?action=register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("Signup failed");
    }

    // optional: auto-login after signup
    setUser(username);
    const data = await response.json();
    localStorage.setItem("token", data.token);
  };

  return (
    <AuthContext.Provider value={{ login, signup, user }}>
      {children}
    </AuthContext.Provider>
  );
};
