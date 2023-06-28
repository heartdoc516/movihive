import React from "react";
import { useState } from "react";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import VerificationInput from "react-verification-input";

const Signin = () => {
  const [authForm, setAuthForm] = useState("Register");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [code, setCode] = useState("");

  const handleAuthForm = () => {
    authForm === "Register" ? setAuthForm("Log in") : setAuthForm("Register");
  };

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
      console.log("error signing up:", error);
    }
  }

  async function signIn(e) {
    e.preventDefault();
    try {
      const user = await Auth.signIn(username, password);
      console.log(user);
    } catch (error) {
      console.log("error signing in", error);
    }
  }

  async function confirmSignUp(e) {
    e.preventDefault();
    try {
      await Auth.confirmSignUp(username, code);
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  }

  return (
    <main className="signin d-flex justify-content-center align-items-center">
      {authForm === "Confirm" ? (
        <form onSubmit={(e) => confirmSignUp(e)}>
          <h3>We sent you a confirmation code, check your email</h3>
          <VerificationInput onChange={(value) => setCode(value)} />
          <button type="submit">Verify</button>
        </form>
      ) : (
        <form
          onSubmit={
            authForm === "Register" ? (e) => signUp(e) : (e) => signIn(e)
          }
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

          <button className="forgot" href="#">
            Forgot Password?
          </button>
          <button className="register" onClick={handleAuthForm} type="button">
            {authForm === "Log in" ? "Register" : "Log in"}
          </button>

          <input type="submit" name="submit" value={authForm} />
        </form>
      )}
    </main>
  );
};

export default Signin;
