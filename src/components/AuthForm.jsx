import React from "react";
import "../style/authform.css";
const AuthForm = ({
  authForm,
  signIn,
  signUp,
  setUsername,
  setEmail,
  setPassword,
  setPasswordConfirmation,
  handleAuthForm,
}) => {
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
  );
};

export default AuthForm;
