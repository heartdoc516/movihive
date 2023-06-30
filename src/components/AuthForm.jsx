import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import "../style/authform.css";
const AuthForm = ({
  user,
  setUser,
  authForm,
  setAuthForm,
  username,
  setUsername,
  password,
  setPassword,
  passwordConfirmation,
  setPasswordConfirmation,
  email,
  setEmail,
}) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  async function signUp(e) {
    e.preventDefault();
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      });
      console.log(user);
      setAuthForm("Confirm");
    } catch (error) {
      setError(error.message);
      console.log("error signing up:", error);
    }
  }

  async function signIn(e) {
    e.preventDefault();
    try {
      const user = await Auth.signIn(username, password);
      console.log(user);
      setUser(user);
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.log("error signing in", error);
    }
  }

  return (
    <form
      onSubmit={authForm === "Register" ? (e) => signUp(e) : (e) => signIn(e)}
      className="auth-form"
    >
      <h1 className="title text-center mb-4">MOVIHIVE</h1>
      <h3 id="logo" className="text-white fs-4 mb-4">
        {authForm}
      </h3>

      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Type in your username.."
        required
        onChange={(e) => {
          setUsername(e.target.value);
          setError("");
        }}
      />
      {authForm === "Register" && (
        <>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Type in your email.."
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </>
      )}
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password.."
        required
        onChange={(e) => {
          setPassword(e.target.value);
          setError("");
        }}
      />

      {authForm === "Register" && (
        <>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Re-enter your password.."
            required
            onChange={(e) => {
              setPasswordConfirmation(e.target.value);
            }}
          />
        </>
      )}

      <p className="text-danger">{error}</p>

      <button className="forgot" href="#">
        Forgot Password?
      </button>
      <button
        className="register"
        onClick={() => {
          authForm === "Register"
            ? setAuthForm("Log in")
            : setAuthForm("Register");
          setError("");
        }}
        type="button"
      >
        {authForm === "Log in" ? "Register" : "Log in"}
      </button>

      <input type="submit" name="submit" value={authForm} />
    </form>
  );
};

export default AuthForm;
