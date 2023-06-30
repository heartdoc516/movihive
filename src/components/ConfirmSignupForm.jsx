import React from "react";
import VerificationInput from "react-verification-input";
import "../style/confirmSignupForm.css";
import { Hub } from "aws-amplify";
import { Auth } from "aws-amplify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ConfirmSignupForm = ({ setUser, username }) => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  async function confirmSignUp(e) {
    e.preventDefault();
    try {
      await Auth.confirmSignUp(username, code);
      listenToAutoSignInEvent();
    } catch (error) {
      setError(error.message);
      console.log("error confirming sign up", error);
    }
  }

  function listenToAutoSignInEvent() {
    Hub.listen("auth", ({ payload }) => {
      const { event } = payload;
      if (event === "autoSignIn") {
        const user = payload.data;
        // assign user
        setUser(user);

        navigate("/");
      } else if (event === "autoSignIn_failure") {
        // redirect to sign in page
        navigate("/auth");
        console.log(event);
      }
    });
  }

  return (
    <form
      className="confirm-signup-form d-flex flex-column justify-content-center align-items-center"
      onSubmit={(e) => confirmSignUp(e)}
    >
      <h3 className="fs-5 text-center mb-3">
        We sent you a confirmation code, check your email.
      </h3>
      <VerificationInput
        classNames={{
          container: "container",
          character: "character",
          characterInactive: "character--inactive",
          characterSelected: "character--selected",
        }}
        onChange={(value) => setCode(value)}
      />

      <p className="text-danger mt-4">{error}</p>

      <input type="submit" name="submit" value="Verify" />
    </form>
  );
};

export default ConfirmSignupForm;