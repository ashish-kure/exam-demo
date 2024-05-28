import React from "react";
import Form from "../shared/Form";
import SignInContainer from "../container/SignIn/SignInContainer";
import Message from "../shared/Message";
import { Link } from "react-router-dom";
import ButtonLoader from "../shared/ButtonLoader";
import { SERVER_ERROR_CODE } from "../constants/apiConstants";

const SignIn = () => {
  const { handleSubmit, signInFields, statusCode, message, loading } =
    SignInContainer();

  return (
    <section style={signInStyle}>
      <Form fields={signInFields} onSubmit={handleSubmit} />
      {loading && <ButtonLoader />}
      <p>
        <Link to="/forgot-password">Forgot Password?</Link>
      </p>
      <p>
        New User? <Link to="/sign-up">Sign Up</Link>
      </p>

      {statusCode === SERVER_ERROR_CODE && <Message message={message} />}
    </section>
  );
};

export default SignIn;

const signInStyle = {
  padding: 16,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  display: "flex",
  flexDirection: "column",
  gap: 25,
  border: "1px solid #cdcdcd",
  borderRadius: 8,
};
