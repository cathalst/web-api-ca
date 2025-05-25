import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import "../styles/auth.css"; 

const SignupPage = () => {
  const { register, handleSubmit } = useForm();
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await context.signup(data);
      navigate("/movies"); 
    } catch (err) {
      console.error("Signup failed", err);
      alert("Signup failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username")}
          placeholder="Username"
          required
        />
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default SignupPage;
