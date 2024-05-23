import React from "react";
import { Link } from "react-router-dom";
import SignUpContainer from "../container/SignUp/SignUpContainer";
import Form from "../shared/Form";
import ButtonLoader from "../shared/ButtonLoader";

const SignUp = () => {
  const { signUpFields, handleSubmit, loading } = SignUpContainer();

  return (
    <>
      <Form fields={signUpFields} onSubmit={handleSubmit} />
      {loading && <ButtonLoader />}
      <p>
        Already have an Account? <Link to="/sign-in">Sign in</Link>
      </p>
    </>
  );
};

export default SignUp;
