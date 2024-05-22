import React from "react";
import Form from "../shared/Form";
import SignInContainer from "../container/SignIn/SignInContainer";
import { Link } from "react-router-dom";
import ButtonLoader from "../shared/ButtonLoader";
import { SERVER_ERROR_CODE } from "../constants/apiConstants";

const SignIn = () => {
  const { handleSubmit, signInFields, statusCode, message, loading } =
    SignInContainer();

  return (
    <>
      <Form fields={signInFields} onSubmit={handleSubmit} />
      {loading && <ButtonLoader />}

      <p>
        <Link to="/forgot-password">Forgot Password?</Link>
      </p>
      <p>
        New User? <Link to="/sign-up">Sign Up</Link>
      </p>

      {statusCode === SERVER_ERROR_CODE && <p>{message}</p>}
    </>
  );
};

export default SignIn;
