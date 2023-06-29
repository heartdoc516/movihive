import React from "react";

import "../style/signin-page.css";
import AuthForm from "../components/AuthForm";
import ConfirmSignupForm from "../components/ConfirmSignupForm";

const AuthPage = ({
  confirmSignUp,
  signIn,
  signUp,
  authForm,
  setAuthForm,
  setCode,
  setUsername,
  setEmail,
  setPassword,
  setPasswordConfirmation,
}) => {
  const handleAuthForm = () => {
    authForm === "Register" ? setAuthForm("Log in") : setAuthForm("Register");
  };

  return (
    <main className="signin d-flex justify-content-center align-items-center">
      {authForm === "Confirm" ? (
        <ConfirmSignupForm confirmSignUp={confirmSignUp} setCode={setCode} />
      ) : (
        <AuthForm
          authForm={authForm}
          signUp={signUp}
          signIn={signIn}
          setUsername={setUsername}
          setEmail={setEmail}
          setPassword={setPassword}
          setPasswordConfirmation={setPasswordConfirmation}
          handleAuthForm={handleAuthForm}
        />
      )}
    </main>
  );
};

export default AuthPage;
