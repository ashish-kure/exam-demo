import React from "react";
import { Link } from "react-router-dom";
import SignUpContainer from "../container/SignUp/SignUpContainer";
import Form from "../shared/Form";
import ButtonLoader from "../shared/ButtonLoader";
import { SERVER_ERROR_CODE } from "../constants/apiConstants";
import Message from "../shared/Message";

const SignUp = () => {
  const { signUpFields, handleSubmit, loading, statusCode, message } =
    SignUpContainer();

  return (
    <section style={signUpStyle}>
      <Form fields={signUpFields} onSubmit={handleSubmit} />
      {loading && <ButtonLoader />}
      <p>
        Already have an Account? <Link to="/sign-in">Sign in</Link>
      </p>
      {statusCode === SERVER_ERROR_CODE && <Message message={message} />}
    </section>
  );
};

export default SignUp;

const signUpStyle = {
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
