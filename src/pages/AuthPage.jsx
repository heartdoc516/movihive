import React, { useContext } from "react";
import { LoadingContext } from "../context/AppContext";
import "../style/signin-page.css";
import AuthForm from "../components/AuthForm";
import { useState } from "react";
import ConfirmSignupForm from "../components/ConfirmSignupForm";
import Spinner from "../components/Spinner";

const AuthPage = ({ user, setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [authForm, setAuthForm] = useState("Log in");
  const { loading, setLoading } = useContext(LoadingContext);
  return (
    <main className="signin d-flex justify-content-center align-items-center">
      {loading && <Spinner />}
      {authForm === "Confirm" ? (
        <ConfirmSignupForm setUser={setUser} username={username} />
      ) : (
        <AuthForm
          setAuthForm={setAuthForm}
          authForm={authForm}
          user={user}
          setUser={setUser}
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          passwordConfirmation={passwordConfirmation}
          setPasswordConfirmation={setPasswordConfirmation}
        />
      )}
    </main>
  );
};

export default AuthPage;
