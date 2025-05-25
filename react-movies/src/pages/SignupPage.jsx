import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import "../styles/auth.css";

const SignupPage = () => {
  const context = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit clicked");

    try {
      await context.signup(username, password);
    } catch (err) {
      console.error("Signup failed", err);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default SignupPage;
