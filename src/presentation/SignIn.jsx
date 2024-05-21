import React from "react";
import Form from "../shared/Form";
import SignInContainer from "../container/SignIn/SignIn.container";

const SignIn = () => {
  const { signInFields, handleSubmit, statusCode, message } = SignInContainer();

  return (
    <>
      <Form fields={signInFields} onSubmit={handleSubmit} />
      {statusCode === 500 && <p>{message}</p>}
    </>
  );
};

export default SignIn;
