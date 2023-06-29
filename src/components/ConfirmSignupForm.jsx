import React from "react";
import VerificationInput from "react-verification-input";
import "../style/confirmSignupForm.css";

const ConfirmSignupForm = ({ confirmSignUp, setCode }) => {
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
      <input type="submit" name="submit" value="Verify" />
    </form>
  );
};

export default ConfirmSignupForm;
